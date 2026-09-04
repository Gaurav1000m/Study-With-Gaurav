#!/usr/bin/env bash
set -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
export JAVA_HOME="/home/gaurav/study/tools/jdk17"
export ANDROID_HOME="/home/gaurav/study/tools/android-sdk"
export PATH="$JAVA_HOME/bin:$ANDROID_HOME/cmdline-tools/latest/bin:$PATH"

echo "=== Building Study With Gaurav APK ==="
cd "$DIR"

/home/gaurav/study/tools/gradle-8.6/bin/gradle assembleRelease --no-daemon

OUTPUT_APK="$DIR/app/build/outputs/apk/release/app-release.apk"
FINAL_APK="/home/gaurav/study/StudyWithGaurav.apk"

if [ -f "$OUTPUT_APK" ]; then
    cp "$OUTPUT_APK" "$FINAL_APK"
    echo "=========================================================="
    echo "✅ SUCCESS! APK created successfully at:"
    echo "   $FINAL_APK"
    echo "=========================================================="
    ls -lh "$FINAL_APK"
else
    echo "❌ APK build failed or output not found at $OUTPUT_APK"
    exit 1
fi
