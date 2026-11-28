set -e
SDK=/root/sdk; BT=$SDK/build-tools/35.0.0; JAR=$SDK/platforms/android-35/android.jar
rm -rf build && mkdir -p build/classes build/dex
$BT/aapt2 compile --dir res -o build/res.zip
$BT/aapt2 link -I $JAR --manifest AndroidManifest.xml -o build/base.apk build/res.zip --java build/gen --min-sdk-version 26 --target-sdk-version 35
javac --release 8 -classpath $JAR -d build/classes $(find src build/gen -name '*.java') 2>&1 | grep -v -i "warning\|JAVA_TOOL" || true
(cd build/classes && jar cf ../classes.jar .)
$BT/d8 --release --min-api 26 --lib $JAR --output build/dex build/classes.jar
cp build/base.apk build/unsigned.apk
(cd build/dex && zip -q ../unsigned.apk classes.dex)
$BT/zipalign -f 4 build/unsigned.apk build/aligned.apk
[ -f nymbo.jks ] || keytool -genkeypair -keystore nymbo.jks -alias nymbo -keyalg RSA -keysize 2048 -validity 10000 -storepass nymbo123 -keypass nymbo123 -dname "CN=Nymbo" >/dev/null 2>&1
$BT/apksigner sign --ks nymbo.jks --ks-pass pass:nymbo123 --out Nymbo.apk build/aligned.apk
$BT/apksigner verify Nymbo.apk && ls -la Nymbo.apk
