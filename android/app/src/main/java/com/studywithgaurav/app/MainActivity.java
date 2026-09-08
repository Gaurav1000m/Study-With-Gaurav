package com.studywithgaurav.app;

import android.annotation.SuppressLint;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.ConnectivityManager;
import android.net.Network;
import android.net.NetworkCapabilities;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.provider.Settings;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.webkit.CookieManager;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.Toast;

import androidx.activity.OnBackPressedCallback;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.NotificationCompat;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.InetAddress;
import java.net.NetworkInterface;
import java.net.URL;
import java.net.UnknownHostException;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicBoolean;

public class MainActivity extends AppCompatActivity {

    public static final String TARGET_URL = "https://studywithgaurav.cc.cd";
    public static final String VERSION_CHECK_URL = "https://studywithgaurav.cc.cd/version.json";
    private static final String NOTIFICATION_CHANNEL_ID = "adblock_alert_channel";
    private static final int NOTIFICATION_ID = 1001;

    private WebView webView;
    private SwipeRefreshLayout swipeRefresh;
    private ProgressBar progressBar;
    private LinearLayout vpnBlockOverlay;
    private LinearLayout dnsBlockOverlay;
    private Button btnRetryVpn;
    private Button btnRetryDns;
    private Button btnOpenDnsSettings;

    private View customView;
    private WebChromeClient.CustomViewCallback customViewCallback;
    private FrameLayout fullscreenContainer;

    private ConnectivityManager connectivityManager;
    private final Handler mainHandler = new Handler(Looper.getMainLooper());
    private final ExecutorService executor = Executors.newFixedThreadPool(2);

    private final AtomicBoolean isAdBlockOrDnsActive = new AtomicBoolean(false);
    private final AtomicBoolean notificationShown = new AtomicBoolean(false);

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        // Cutout mode for all modern notch & punch-hole mobile displays
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            getWindow().getAttributes().layoutInDisplayCutoutMode =
                    WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
        }

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        setupSafeAreaInsets();
        initViews();
        setupWebView();
        setupBackNavigation();

        // Evaluate security and load site
        evaluateSecurityAndLoad();

        // In-App Auto-Update Checker
        checkForAppUpdate();
    }

    /**
     * Safe Area View: Adapts padding for status bar, notches, hole-punch cameras,
     * and bottom gesture navigation bars on every mobile screen.
     */
    private void setupSafeAreaInsets() {
        View root = findViewById(R.id.rootContainer);
        if (root != null) {
            ViewCompat.setOnApplyWindowInsetsListener(root, (v, windowInsets) -> {
                Insets insets = windowInsets.getInsets(
                        WindowInsetsCompat.Type.systemBars() | WindowInsetsCompat.Type.displayCutout());
                v.setPadding(insets.left, insets.top, insets.right, insets.bottom);
                return WindowInsetsCompat.CONSUMED;
            });
        }
    }

    private void initViews() {
        webView = findViewById(R.id.webView);
        swipeRefresh = findViewById(R.id.swipeRefresh);
        progressBar = findViewById(R.id.progressBar);
        vpnBlockOverlay = findViewById(R.id.vpnBlockOverlay);
        dnsBlockOverlay = findViewById(R.id.dnsBlockOverlay);
        btnRetryVpn = findViewById(R.id.btnRetryVpn);
        btnRetryDns = findViewById(R.id.btnRetryDns);
        btnOpenDnsSettings = findViewById(R.id.btnOpenDnsSettings);

        btnRetryVpn.setOnClickListener(v -> evaluateSecurityAndLoad());
        btnRetryDns.setOnClickListener(v -> evaluateSecurityAndLoad());
        if (btnOpenDnsSettings != null) {
            btnOpenDnsSettings.setOnClickListener(v -> openDnsSettings());
        }

        swipeRefresh.setColorSchemeColors(0xFF4F46E5, 0xFF06B6D4, 0xFF2563EB);
        swipeRefresh.setOnRefreshListener(() -> {
            if (webView != null) {
                webView.reload();
            }
            swipeRefresh.setRefreshing(false);
        });

        // Fast, smooth scrolling: only enable swipe refresh when scrolled to top
        if (webView != null) {
            webView.getViewTreeObserver().addOnScrollChangedListener(() -> {
                if (swipeRefresh != null) {
                    swipeRefresh.setEnabled(webView.getScrollY() == 0);
                }
            });
        }
    }

    private void setupBackNavigation() {
        getOnBackPressedDispatcher().addCallback(this, new OnBackPressedCallback(true) {
            @Override
            public void handleOnBackPressed() {
                if (customView != null) {
                    hideCustomView();
                } else if (webView != null && webView.canGoBack()) {
                    webView.goBack();
                } else {
                    finish();
                }
            }
        });
    }

    @SuppressLint("SetJavaScriptEnabled")
    private void setupWebView() {
        // High performance hardware acceleration layer
        webView.setLayerType(View.LAYER_TYPE_HARDWARE, null);

        WebSettings settings = webView.getSettings();
        // Ads & Interactive features require full JavaScript & DOM Storage
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setSupportZoom(true);
        settings.setBuiltInZoomControls(true);
        settings.setDisplayZoomControls(false);
        settings.setUseWideViewPort(true);
        settings.setLoadWithOverviewMode(true);
        settings.setMediaPlaybackRequiresUserGesture(false);
        settings.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);

        // High performance & fast caching
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);
        settings.setRenderPriority(WebSettings.RenderPriority.HIGH);
        settings.setLoadsImagesAutomatically(true);
        settings.setBlockNetworkImage(false);

        // Pre-rasterize offscreen content for 60/120fps smooth scrolling
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            settings.setOffscreenPreRaster(true);
        }

        // Support ad windows / popups cleanly
        settings.setSupportMultipleWindows(true);
        settings.setJavaScriptCanOpenWindowsAutomatically(true);

        // Cookies support for persisted login, preferences & ads attribution
        CookieManager cookieManager = CookieManager.getInstance();
        cookieManager.setAcceptCookie(true);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            cookieManager.setAcceptThirdPartyCookies(webView, true);
        }

        // Bridge for native verification
        webView.addJavascriptInterface(new SecurityBridge(), "AndroidSecurityBridge");

        // Download handling for study PDFs and notes
        webView.setDownloadListener((url, userAgent, contentDisposition, mimetype, contentLength) -> {
            try {
                Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                startActivity(intent);
            } catch (Exception e) {
                Toast.makeText(this, "Opening download...", Toast.LENGTH_SHORT).show();
            }
        });

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

            @Override
            public boolean onCreateWindow(WebView view, boolean isDialog, boolean isUserGesture, Message resultMsg) {
                WebView.HitTestResult result = view.getHitTestResult();
                String data = result != null ? result.getExtra() : null;
                if (data != null && (data.startsWith("http://") || data.startsWith("https://"))) {
                    view.loadUrl(data);
                    return true;
                }

                // Handle window.open via lightweight transport webview to capture destination
                WebView tempWebView = new WebView(MainActivity.this);
                tempWebView.setWebViewClient(new WebViewClient() {
                    @Override
                    public boolean shouldOverrideUrlLoading(WebView v, WebResourceRequest req) {
                        String targetUrl = req.getUrl().toString();
                        handleUrlNavigation(view, targetUrl);
                        return true;
                    }

                    @Override
                    public boolean shouldOverrideUrlLoading(WebView v, String targetUrl) {
                        handleUrlNavigation(view, targetUrl);
                        return true;
                    }
                });
                WebView.WebViewTransport transport = (WebView.WebViewTransport) resultMsg.obj;
                transport.setWebView(tempWebView);
                resultMsg.sendToTarget();
                return true;
            }

            @Override
            public void onShowCustomView(View view, CustomViewCallback callback) {
                showCustomView(view, callback);
            }

            @Override
            public void onHideCustomView() {
                hideCustomView();
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
                return handleUrlNavigation(view, url);
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                return handleUrlNavigation(view, url);
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
                super.onReceivedError(view, request, error);
                if (request == null || request.getUrl() == null || request.getUrl().getHost() == null) return;
                
                String host = request.getUrl().getHost().toLowerCase();
                boolean isAdDomain = host.contains("pagead2.googlesyndication.com") ||
                        host.contains("googleads") ||
                        host.contains("profitableratecpmnetwork.com") ||
                        host.contains("highrevenueformat.com") ||
                        host.contains("doubleclick.net");

                if (isAdDomain && Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                    int code = error.getErrorCode();
                    if (code == WebViewClient.ERROR_HOST_LOOKUP ||
                            code == WebViewClient.ERROR_CONNECT ||
                            code == WebViewClient.ERROR_FAILED_SSL_HANDSHAKE) {
                        onAdBlockOrDnsDetected();
                    }
                }
            }
        });
    }

    /**
     * Open web URLs inside the same tab; external app protocols in respective apps
     */
    private boolean handleUrlNavigation(WebView view, String url) {
        if (url == null) return false;

        // Web URLs (HTTP/HTTPS): Keep in the SAME tab inside the app
        if (url.startsWith("http://") || url.startsWith("https://")) {
            view.loadUrl(url);
            return true;
        }

        // External protocols (e.g. Telegram, WhatsApp, Play Store, mailto, tel)
        try {
            Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
            startActivity(intent);
            return true;
        } catch (Exception e) {
            return true;
        }
    }

    private void showCustomView(View view, WebChromeClient.CustomViewCallback callback) {
        if (customView != null) {
            callback.onCustomViewHidden();
            return;
        }

        customView = view;
        customViewCallback = callback;

        FrameLayout decor = (FrameLayout) getWindow().getDecorView();
        fullscreenContainer = new FrameLayout(this);
        fullscreenContainer.setBackgroundColor(0xFF000000);
        fullscreenContainer.addView(view, new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
        decor.addView(fullscreenContainer, new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));

        webView.setVisibility(View.GONE);
        swipeRefresh.setVisibility(View.GONE);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
    }

    private void hideCustomView() {
        if (customView == null) return;

        FrameLayout decor = (FrameLayout) getWindow().getDecorView();
        if (fullscreenContainer != null) {
            decor.removeView(fullscreenContainer);
            fullscreenContainer = null;
        }

        customView = null;
        if (customViewCallback != null) {
            customViewCallback.onCustomViewHidden();
            customViewCallback = null;
        }

        webView.setVisibility(View.VISIBLE);
        swipeRefresh.setVisibility(View.VISIBLE);
        getWindow().clearFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
    }

    private void evaluateSecurityAndLoad() {
        if (isVpnActive()) {
            showVpnBlock();
            return;
        }

        if (vpnBlockOverlay != null) {
            vpnBlockOverlay.setVisibility(View.GONE);
        }

        // Asynchronously inspect Private DNS & Ad-blocking sinkholes
        executor.execute(() -> {
            boolean dnsBlocking = checkPrivateDnsSettings() || checkDnsSinkhole();
            isAdBlockOrDnsActive.set(dnsBlocking);

            mainHandler.post(() -> {
                if (dnsBlocking) {
                    onAdBlockOrDnsDetected();
                } else {
                    if (dnsBlockOverlay != null) {
                        dnsBlockOverlay.setVisibility(View.GONE);
                    }
                    if (webView != null) {
                        if (webView.getUrl() == null || webView.getUrl().isEmpty()) {
                            webView.loadUrl(TARGET_URL);
                        } else {
                            webView.reload();
                        }
                    }
                }
            });
        });
    }

    /**
     * Check if Android's Private DNS mode is active or configured with an ad-blocking provider
     */
    private boolean checkPrivateDnsSettings() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            try {
                String mode = Settings.Global.getString(getContentResolver(), "private_dns_mode");
                String specifier = Settings.Global.getString(getContentResolver(), "private_dns_specifier");

                // Strict hostname mode
                if ("hostname".equalsIgnoreCase(mode) && specifier != null && !specifier.trim().isEmpty()) {
                    String s = specifier.toLowerCase();
                    if (s.contains("adguard") || s.contains("nextdns") || s.contains("controld") ||
                            s.contains("mullvad") || s.contains("ahadns") || s.contains("adblock") ||
                            s.contains("cleanbrowsing") || s.contains("rethink") || s.contains("dns0.eu") ||
                            s.contains("block") || s.contains("quad9") || s.contains("blokada")) {
                        return true;
                    }
                }
            } catch (Exception ignored) {
            }
        }
        return false;
    }

    /**
     * Probes known ad network domains to detect local ad-blocker sinkholes or DNS blocking
     */
    private boolean checkDnsSinkhole() {
        try {
            String[] adDomains = new String[]{
                    "pagead2.googlesyndication.com",
                    "googleads.g.doubleclick.net",
                    "pl31181516.profitableratecpmnetwork.com",
                    "www.highrevenueformat.com"
            };

            for (String domain : adDomains) {
                try {
                    InetAddress address = InetAddress.getByName(domain);
                    if (address != null) {
                        String ip = address.getHostAddress();
                        if (address.isLoopbackAddress() ||
                                "0.0.0.0".equals(ip) ||
                                "127.0.0.1".equals(ip) ||
                                "::1".equals(ip) ||
                                (ip != null && (ip.startsWith("0.") || ip.startsWith("127.")))) {
                            return true;
                        }
                    }
                } catch (UnknownHostException e) {
                    // Ad domain failed to resolve — verify if general internet works
                    if (isGeneralInternetResolving()) {
                        return true;
                    }
                }
            }
        } catch (Exception ignored) {
        }
        return false;
    }

    private boolean isGeneralInternetResolving() {
        try {
            InetAddress address = InetAddress.getByName("google.com");
            return address != null && !address.isLoopbackAddress();
        } catch (Exception e) {
            return false;
        }
    }

    private void onAdBlockOrDnsDetected() {
        isAdBlockOrDnsActive.set(true);
        mainHandler.post(() -> {
            if (webView != null) {
                webView.stopLoading();
            }
            if (dnsBlockOverlay != null) {
                dnsBlockOverlay.setVisibility(View.VISIBLE);
            }
            if (vpnBlockOverlay != null) {
                vpnBlockOverlay.setVisibility(View.GONE);
            }

            if (!notificationShown.getAndSet(true)) {
                postAdBlockNotification();
                Toast.makeText(this, "⚠️ Ad Blocker or Private DNS detected. Please disable it to continue.", Toast.LENGTH_LONG).show();
            }
        });
    }

    private void postAdBlockNotification() {
        try {
            NotificationManager notificationManager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
            if (notificationManager == null) return;

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                NotificationChannel channel = new NotificationChannel(
                        NOTIFICATION_CHANNEL_ID,
                        "Ad Blocker & Private DNS Alerts",
                        NotificationManager.IMPORTANCE_HIGH
                );
                channel.setDescription("Alerts when an ad blocker or Private DNS is preventing ads from loading.");
                notificationManager.createNotificationChannel(channel);
            }

            Intent settingsIntent;
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                settingsIntent = new Intent("android.settings.NETWORK_PROVIDER_SETTINGS");
            } else {
                settingsIntent = new Intent(Settings.ACTION_WIRELESS_SETTINGS);
            }
            PendingIntent pendingIntent = PendingIntent.getActivity(
                    this,
                    0,
                    settingsIntent,
                    PendingIntent.FLAG_UPDATE_CURRENT | (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M ? PendingIntent.FLAG_IMMUTABLE : 0)
            );

            NotificationCompat.Builder builder = new NotificationCompat.Builder(this, NOTIFICATION_CHANNEL_ID)
                    .setSmallIcon(R.mipmap.ic_launcher)
                    .setContentTitle(getString(R.string.ad_blocker_notification_title))
                    .setContentText(getString(R.string.ad_blocker_notification_desc))
                    .setStyle(new NotificationCompat.BigTextStyle().bigText(getString(R.string.ad_blocker_notification_desc)))
                    .setPriority(NotificationCompat.PRIORITY_HIGH)
                    .setAutoCancel(true)
                    .setContentIntent(pendingIntent);

            if (Build.VERSION.SDK_INT < Build.VERSION_CODES.TIRAMISU ||
                    checkSelfPermission(android.Manifest.permission.POST_NOTIFICATIONS) == android.content.pm.PackageManager.PERMISSION_GRANTED) {
                notificationManager.notify(NOTIFICATION_ID, builder.build());
            }
        } catch (Exception ignored) {
        }
    }

    private void openDnsSettings() {
        try {
            Intent intent = new Intent("android.settings.NETWORK_PROVIDER_SETTINGS");
            startActivity(intent);
        } catch (Exception e1) {
            try {
                Intent intent = new Intent(Settings.ACTION_WIRELESS_SETTINGS);
                startActivity(intent);
            } catch (Exception e2) {
                try {
                    Intent intent = new Intent(Settings.ACTION_SETTINGS);
                    startActivity(intent);
                } catch (Exception ignored) {
                    Toast.makeText(this, "Please open Settings -> Network & Internet -> Private DNS", Toast.LENGTH_LONG).show();
                }
            }
        }
    }

    public boolean isVpnActive() {
        try {
            if (connectivityManager == null) {
                connectivityManager = (ConnectivityManager) getSystemService(Context.CONNECTIVITY_SERVICE);
            }
            if (connectivityManager != null && Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
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

            // Inspect network interfaces for VPN tunnels
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

            // Inspect proxy configuration
            String proxyHost = System.getProperty("http.proxyHost");
            String proxyPort = System.getProperty("http.proxyPort");
            if (proxyHost != null && !proxyHost.isEmpty() && proxyPort != null && !proxyPort.isEmpty()) {
                return true;
            }
        } catch (Exception ignored) {
        }
        return false;
    }

    private void showVpnBlock() {
        mainHandler.post(() -> {
            if (webView != null) webView.stopLoading();
            if (vpnBlockOverlay != null) vpnBlockOverlay.setVisibility(View.VISIBLE);
            if (dnsBlockOverlay != null) dnsBlockOverlay.setVisibility(View.GONE);
        });
    }

    /**
     * In-App Auto-Update Checker:
     * Checks https://studywithgaurav.cc.cd/version.json. If a newer release is published,
     * prompts the student with release notes and a direct update button.
     */
    private void checkForAppUpdate() {
        executor.execute(() -> {
            try {
                URL url = new URL(VERSION_CHECK_URL + "?t=" + System.currentTimeMillis());
                HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                conn.setConnectTimeout(8000);
                conn.setReadTimeout(8000);
                conn.setRequestMethod("GET");
                conn.connect();

                if (conn.getResponseCode() == 200) {
                    BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));
                    StringBuilder sb = new StringBuilder();
                    String line;
                    while ((line = reader.readLine()) != null) {
                        sb.append(line);
                    }
                    reader.close();

                    JSONObject json = new JSONObject(sb.toString());
                    int latestVersionCode = json.optInt("versionCode", 1);
                    String latestVersionName = json.optString("versionName", "1.0.4");
                    String apkUrl = json.optString("apkUrl", "https://studywithgaurav.cc.cd/downloads/StudyWithGaurav.apk");
                    String releaseNotes = json.optString("releaseNotes", "A new version of Study With Gaurav is available!");
                    boolean forceUpdate = json.optBoolean("forceUpdate", false);

                    int currentVersionCode = 1;
                    try {
                        currentVersionCode = getPackageManager().getPackageInfo(getPackageName(), 0).versionCode;
                    } catch (Exception ignored) {}

                    if (latestVersionCode > currentVersionCode) {
                        final String finalNotes = releaseNotes;
                        final String finalApkUrl = apkUrl;
                        final String finalVersionName = latestVersionName;
                        mainHandler.post(() -> showUpdateDialog(finalVersionName, finalNotes, finalApkUrl, forceUpdate));
                    }
                }
            } catch (Exception ignored) {
                // Silently continue if offline
            }
        });
    }

    private void showUpdateDialog(String versionName, String releaseNotes, String apkUrl, boolean forceUpdate) {
        if (isFinishing() || isDestroyed()) return;

        AlertDialog.Builder builder = new AlertDialog.Builder(this)
                .setTitle("🚀 New Update Available! (v" + versionName + ")")
                .setMessage("A newer, faster release of Study With Gaurav is available!\n\nWhat's New:\n" + releaseNotes)
                .setPositiveButton("Download & Update", (dialog, which) -> {
                    try {
                        Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(apkUrl));
                        startActivity(intent);
                    } catch (Exception e) {
                        Toast.makeText(MainActivity.this, "Opening download link...", Toast.LENGTH_SHORT).show();
                    }
                });

        if (!forceUpdate) {
            builder.setNegativeButton("Later", (dialog, which) -> dialog.dismiss());
            builder.setCancelable(true);
        } else {
            builder.setCancelable(false);
        }

        builder.show();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        executor.shutdown();
    }

    public class SecurityBridge {
        @JavascriptInterface
        public boolean isVpnActive() {
            return MainActivity.this.isVpnActive();
        }

        @JavascriptInterface
        public boolean isAdBlockOrDnsActive() {
            return isAdBlockOrDnsActive.get();
        }
    }
}
