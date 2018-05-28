1. 使用react-native的时候遇到了很多坑
https://www.cnblogs.com/wang4517/p/6178859.html
2. react-navigation
- createStackNavigator 代替 StackNavigator ,其余的导航方式都一样，加使用create的方法

1. style 
```
//样式也可以是一个数组
style={
    [styles.view, styles.font]
} 
// 可以和样式混编
style={
    [styles.view, styles.font，{color: "#ff0000"}
]
} 
//可以使用条件
style={
    [
        this.state.touching && styles.active
    ]
}
```
1. app升级方案
```
// AndroidMainfest.xml配置权限
<uses-permission android:name="android.permission.INTERNET" />  
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>  
```
### 打包发布
- 生成key
```
keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000 
```
- src/main 下新建assets， index.android.bundle复制到下边
```
curl -k "http://localhost:8081/index.android.bundle" > android/app/src/main/assets/index.android.bundle

```
- app下的build.grale 签名
```
signingConfigs {
    release {
        storeFile file(RELEASE_STOREFILE);
        storePassword RELEASE_STORE_PASSWORD;
        keyAlias RELEASE_KEY_ALIAS
        keyPassword RELEASE_KEY_PASSWORD
    }
 }
 buildTypes {
    release {
        minifyEnabled true   //是否代码混淆
        multiDexEnabled true //防止方法数量超过65536导致错误
        proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        signingConfig signingConfigs.release
    }
 }
```
- 开启混淆压缩
```
//app下的build.gradle 
def enableProguardInReleaseBuilds = false 改为true
// proguard-rules.pro 是混淆压缩规则
```

