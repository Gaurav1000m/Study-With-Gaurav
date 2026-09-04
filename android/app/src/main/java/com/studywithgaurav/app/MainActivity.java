package com.studywithgaurav.app;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.ConnectivityManager;
import android.net.Network;
import android.net.NetworkCapabilities;
import android.net.NetworkRequest;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.provider.Settings;
import android.view.View;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.ProgressBar;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;

import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.InetAddress;
import java.net.NetworkInterface;
import java.net.URL;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class MainActivity extends AppCompatActivity {

    private WebView webView;
    private SwipeRefreshLayout swipeRefresh;
    private ProgressBar progressBar;
    private LinearLayout vpnBlockOverlay;
    private LinearLayout dnsBlockOverlay;
    private Button btnRetryVpn;
    private Button btnRetryDns;

    private ConnectivityManager connectivityManager;
    private ConnectivityManager.NetworkCallback networkCallback;
    private final Handler mainHandler = new Handler(Looper.getMainLooper());
    private final ExecutorService executor = Executors.newSingleThreadExecutor();

    // Obfuscated target URL: "https://studywithgaurav.cc.cd" XOR-encoded with key 0x5B (91)
    private static final byte[] OBFUSCATED_TARGET = new byte[]{
            63, 55, 55, 51, 56, 105, 116, 116, 56, 55, 54, 59, 50, 48, 62, 55, 63, 60, 74, 54, 57, 74, 49, 117, 72, 72, 117, 72, 79
    };
    private static final byte OBF_KEY = 0x5B;

    private String getTargetUrl() {
        byte[] decoded = new byte[OBFUSCATED_TARGET.length];
        for (int i = 0; i < OBFUSCATED_TARGET.length; i++) {
            decoded[i] = (byte) (OBFUSCATED_TARGET[i] ^ OBF_KEY);
        }
        return new String(decoded);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        // Anti-Leak: Prevent screenshots, screen recordings, and task switcher previews
        getWindow().setFlags(
                WindowManager.LayoutParams.FLAG_SECURE,
                WindowManager.LayoutParams.FLAG_SECURE
        );

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        initViews();
        setupWebView();
        setupNetworkListener();

        // Perform immediate security assessment
        evaluateSecurityAndLoad();
    }

    private void initViews() {
        webView = findViewById(R.id.webView);
        swipeRefresh = findViewById(R.id.swipeRefresh);
        progressBar = findViewById(R.id.progressBar);
        vpnBlockOverlay = findViewById(R.id.vpnBlockOverlay);
        dnsBlockOverlay = findViewById(R.id.dnsBlockOverlay);
        btnRetryVpn = findViewById(R.id.btnRetryVpn);
        btnRetryDns = findViewById(R.id.btnRetryDns);

        btnRetryVpn.setOnClickListener(v -> evaluateSecurityAndLoad());
        btnRetryDns.setOnClickListener(v -> evaluateSecurityAndLoad());

        swipeRefresh.setColorSchemeColors(0xFF4F46E5, 0xFF06B6D4);
        swipeRefresh.setOnRefreshListener(() -> {
            if (!isVpnActive()) {
                webView.reload();
            } else {
                showVpnBlock();
            }
            swipeRefresh.setRefreshing(false);
        });
    }

    @SuppressLint("SetJavaScriptEnabled")
    private void setupWebView() {
        // Anti-Leak: Disable Chrome USB Remote Debugging
        WebView.setWebContentsDebuggingEnabled(false);

        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setSupportZoom(true);
        settings.setBuiltInZoomControls(true);
        settings.setDisplayZoomControls(false);
        settings.setUseWideViewPort(true);
        settings.setLoadWithOverviewMode(true);
        settings.setMediaPlaybackRequiresUserGesture(false);

        // Security / Anti-Leak settings
        settings.setSaveFormData(false);
        settings.setAllowFileAccess(false);
        settings.setAllowContentAccess(false);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            settings.setSafeBrowsingEnabled(true);
        }

        // Disable text selection and context menu to prevent URL/content copying
        webView.setLongClickable(false);
        webView.setOnLongClickListener(v -> true);
        webView.setHapticFeedbackEnabled(false);

        // JavaScript Bridge for bi-directional security verification
        webView.addJavascriptInterface(new SecurityBridge(), "AndroidSecurityBridge");

        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onProgressChanged(WebView view, int newProgress) {
                if (newProgress < 100) {
                    progressBar.setVisibility(View.VISIBLE);
                    progressBar.setProgress(newProgress);
                } else {
                    progressBar.setVisibility(View.GONE);
                }
            }
        });

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageStarted(WebView view, String url, Bitmap favicon) {
                if (isVpnActive()) {
                    view.stopLoading();
                    showVpnBlock();
                    return;
                }
                super.onPageStarted(view, url, favicon);
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                String url = request.getUrl().toString();
                return handleUrlNavigation(url);
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                return handleUrlNavigation(url);
            }

            private boolean handleUrlNavigation(String url) {
                if (isVpnActive()) {
                    showVpnBlock();
                    return true;
                }

                String targetHost = Uri.parse(getTargetUrl()).getHost();
                Uri uri = Uri.parse(url);

                if (uri.getHost() != null && uri.getHost().equalsIgnoreCase(targetHost)) {
                    // Internal navigation stays inside WebView
                    return false;
                }

                // Handling external protocols like telegram, intent, etc.
                try {
                    Intent intent = new Intent(Intent.ACTION_VIEW, uri);
                    startActivity(intent);
                } catch (Exception e) {
                    // Fallback to in-app load if app cannot handle
                    return false;
                }
                return true;
            }
        });
    }

    /**
     * Complete Security Evaluation:
     * 1. Checks native VPN & tunnel interfaces
     * 2. Checks Private DNS settings & Ad-Block sinkholes
     */
    private void evaluateSecurityAndLoad() {
        if (isVpnActive()) {
            showVpnBlock();
            return;
        }

        // Hide VPN overlay if disconnected
        vpnBlockOverlay.setVisibility(View.GONE);

        // Check for Private DNS ad blocking
        executor.execute(() -> {
            boolean isDnsBlocking = isPrivateDnsAdBlocking();
            mainHandler.post(() -> {
                if (isDnsBlocking) {
                    showDnsBlock();
                } else {
                    dnsBlockOverlay.setVisibility(View.GONE);
                    if (webView.getUrl() == null) {
                        webView.loadUrl(getTargetUrl());
                    }
                }
            });
        });
    }

    /**
     * Native VPN and Proxy Detection
     */
    public boolean isVpnActive() {
        try {
            // Method 1: ConnectivityManager Network Capabilities
            if (connectivityManager == null) {
                connectivityManager = (ConnectivityManager) getSystemService(Context.CONNECTIVITY_SERVICE);
            }
            if (connectivityManager != null) {
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                    Network activeNetwork = connectivityManager.getActiveNetwork();
                    if (activeNetwork != null) {
                        NetworkCapabilities caps = connectivityManager.getNetworkCapabilities(activeNetwork);
                        if (caps != null) {
                            if (caps.hasTransport(NetworkCapabilities.TRANSPORT_VPN)) {
                                return true;
                            }
                            if (!caps.hasCapability(NetworkCapabilities.NET_CAPABILITY_NOT_VPN)) {
                                return true;
                            }
                        }
                    }
                }
            }

            // Method 2: Inspect Network Interfaces for VPN Tunnels (tun, ppp, wg, tap)
            List<NetworkInterface> interfaces = Collections.list(NetworkInterface.getNetworkInterfaces());
            for (NetworkInterface itf : interfaces) {
                if (itf.isUp()) {
                    String name = itf.getName().toLowerCase();
                    if (name.contains("tun") || name.contains("ppp") ||
                            name.contains("tap") || name.contains("wg") || name.contains("ipsec")) {
                        return true;
                    }
                }
            }

            // Method 3: Check System HTTP/SOCKS Proxy configuration
            String proxyHost = System.getProperty("http.proxyHost");
            String proxyPort = System.getProperty("http.proxyPort");
            if (proxyHost != null && !proxyHost.isEmpty() && proxyPort != null && !proxyPort.isEmpty()) {
                return true;
            }

        } catch (Exception ignored) {
        }
        return false;
    }

    /**
     * Detects Private DNS (NextDNS, AdGuard) and ad blocking
     */
    private boolean isPrivateDnsAdBlocking() {
        try {
            // 1. Android Private DNS Settings inspection (API 28+)
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
                String specifier = Settings.Global.getString(getContentResolver(), "private_dns_specifier");
                if (specifier != null && !specifier.isEmpty()) {
                    String s = specifier.toLowerCase();
                    if (s.contains("adguard") || s.contains("nextdns") || s.contains("adblock") ||
                            s.contains("controld") || s.contains("anti-ad") || s.contains("block")) {
                        return true;
                    }
                }
            }

            // 2. Direct DNS lookup check on Google AdSense domain
            // ONLY flag if the DNS server actively returns a loopback or sinkhole IP
            try {
                InetAddress addr = InetAddress.getByName("pagead2.googlesyndication.com");
                if (addr != null) {
                    String ip = addr.getHostAddress();
                    if (addr.isLoopbackAddress() || "0.0.0.0".equals(ip) || "127.0.0.1".equals(ip)) {
                        return true;
                    }
                }
            } catch (Exception ignored) {
                // Do not block on temporary network initialization delay
            }

        } catch (Exception ignored) {
        }
        return false;
    }

    private void showVpnBlock() {
        mainHandler.post(() -> {
            webView.stopLoading();
            vpnBlockOverlay.setVisibility(View.VISIBLE);
            dnsBlockOverlay.setVisibility(View.GONE);
        });
    }

    private void showDnsBlock() {
        mainHandler.post(() -> {
            webView.stopLoading();
            dnsBlockOverlay.setVisibility(View.VISIBLE);
            vpnBlockOverlay.setVisibility(View.GONE);
        });
    }

    private void setupNetworkListener() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N && connectivityManager != null) {
            networkCallback = new ConnectivityManager.NetworkCallback() {
                @Override
                public void onCapabilitiesChanged(@NonNull Network network, @NonNull NetworkCapabilities caps) {
                    if (caps.hasTransport(NetworkCapabilities.TRANSPORT_VPN) ||
                            !caps.hasCapability(NetworkCapabilities.NET_CAPABILITY_NOT_VPN)) {
                        showVpnBlock();
                    }
                }

                @Override
                public void onLost(@NonNull Network network) {
                    if (isVpnActive()) {
                        showVpnBlock();
                    }
                }
            };
            try {
                connectivityManager.registerDefaultNetworkCallback(networkCallback);
            } catch (Exception ignored) {
            }
        }
    }

    @Override
    public void onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (connectivityManager != null && networkCallback != null) {
            try {
                connectivityManager.unregisterNetworkCallback(networkCallback);
            } catch (Exception ignored) {
            }
        }
        executor.shutdown();
    }

    /**
     * Bridge exposed to web JavaScript to enforce native VPN checks
     */
    public class SecurityBridge {
        @JavascriptInterface
        public boolean isVpnActive() {
            return MainActivity.this.isVpnActive();
        }
    }
}
