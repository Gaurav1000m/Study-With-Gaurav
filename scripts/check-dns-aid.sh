#!/usr/bin/env bash
# Script to verify DNS-AID records via DNS-over-HTTPS (DoH)
DOMAIN="${1:-studywithgaurav.cc.cd}"

echo "=========================================================="
echo "Checking DNS-AID records for: $DOMAIN"
echo "=========================================================="

echo -e "\n1. Checking _index._agents.$DOMAIN (SVCB / Type 64)..."
INDEX_RES=$(curl -s "https://cloudflare-dns.com/dns-query?name=_index._agents.${DOMAIN}&type=64" -H "accept: application/dns-json")
echo "$INDEX_RES" | grep -q '"Answer"' && echo "✅ Found _index._agents record!" || echo "❌ _index._agents record not found (Status: $(echo "$INDEX_RES" | grep -o '"Status":[0-9]*'))"

echo -e "\n2. Checking _a2a._agents.$DOMAIN (SVCB / Type 64)..."
A2A_RES=$(curl -s "https://cloudflare-dns.com/dns-query?name=_a2a._agents.${DOMAIN}&type=64" -H "accept: application/dns-json")
echo "$A2A_RES" | grep -q '"Answer"' && echo "✅ Found _a2a._agents record!" || echo "❌ _a2a._agents record not found (Status: $(echo "$A2A_RES" | grep -o '"Status":[0-9]*'))"

echo -e "\n3. Checking DNSSEC (DS / Type 43)..."
DNSSEC_RES=$(curl -s "https://dns.google/resolve?name=${DOMAIN}&type=DS")
AD_FLAG=$(echo "$DNSSEC_RES" | grep -o '"AD":true')
if [ -n "$AD_FLAG" ]; then
  echo "✅ DNSSEC is enabled and authenticated (AD: true)"
else
  echo "⚠️ DNSSEC is not yet enabled or authenticated on this zone"
fi

echo -e "\n=========================================================="
