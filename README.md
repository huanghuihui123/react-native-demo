### 一、RN 权限获取(PermissionsAndroid)

1. 在 AndroidMainfest.xml 配置文件中添加需要申请的权限
```
<!--获取相机权限-->
<uses-permission android:name="android.permission.CAMERA"/>
```

2. 使用 PermissionsAndroid 获取权限
```
import { PermissionsAndroid } from 'react-native'

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "Cool Photo App Camera Permission",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

```

3. PermissionsAndroid 常用方法

```
// 检查某项权限是否经过用户授权，返回一个 promise，解析为布尔值
check(permission); 

// 弹出提示框向用户请求某项权限，返回一个 promise，最终值为 PermissionsAndroid.RESULTS
request(permission, [rationale]); 

// 在一个弹出框中向用户请求多个权限，返回值为一个 object，key 为各权限名称，值为PermissionsAndroid.RESULTS。
requestMultiple(permissions);
```

4. 请求权限的返回值(PermissionsAndroid.RESULTS)

```
GRANTED: 'granted'， 表示用户已授权

DENIED: 'denied'， 表示用户已拒绝

NEVER_ASK_AGAIN: 'never_ask_again'，表示用户已拒绝，且不愿被再次询问
```

### 二、配置启动页
1. 安装 react-native-splash-screen 
```
yarn add react-native-splash-screen 
```

2. 在android/settings.gradle目录下，添加以下代码:
```
include ':react-native-splash-screen'   
project(':react-native-splash-screen').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-splash-screen/android')
```

3. 在android/app/build.gradle目录下中的 dependencies 对象，引入该安卓包:
```
implementation project(':react-native-splash-screen')
```

4. 在android/app/src/main/java/com/xxxxx/MainActivity.java目录下，引入该安卓包：
```
import android.os.Bundle;  
import org.devio.rn.splashscreen.SplashScreen; 

@Override
protected void onCreate(Bundle savedInstanceState) {
  SplashScreen.show(this);  // here 
  super.onCreate(savedInstanceState);
}
```

5. 在android/app/src/main/java/com/xxxxx/MainApplication.java 引入以下代码:
```
import org.devio.rn.splashscreen.SplashScreenReactPackage;
```

6. 在android/app/src/main/res下创建layout文件夹，在layout文件夹下创建launch_screen.xml
```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
  android:orientation="vertical" android:layout_width="match_parent"
  android:layout_height="match_parent"
  android:background="@drawable/launch_screen">
</LinearLayout>
```

7. 在android/app/src/main/res/values文件夹下创建color.xml
```
<?xml version="1.0" encoding="utf-8"?>
<resources>
  <color name="primary_dark">#000000</color>
</resources>
```

8. 在android/app/src/main/res下创建名为drawable-xhdpi文件(可以创建drawable其他尺寸的文件)，将图片名称改为：launch_screen.png

9. 在android/app/src/main/res/values/styles.xml文件，添加以下代码解决白屏:
```
<resources>
    <style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">
        <!-- Customize your theme here. -->
        <!--设置透明背景-->
        <item name="android:windowIsTranslucent">true</item> // here
    </style>
</resources>
```

10. 在App.tsx文件添加以下代码:
```
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide()
  })
  ...
};

```

11. 重新编译运行
```
yarn android
```


### 三、实现本地存储
1. 安装 @react-native-community/async-storage
```
yarn add @react-native-community/async-storage
```

2.抽象封装
```
import AsyncStorage from '@react-native-community/async-storage';

export const setItem = async <T>(key: string, value: T) => {
    try {
        const transformValue: string = JSON.stringify(value)
        await AsyncStorage.setItem('key', transformValue)
    } catch (e) {
        // saving error
        console.log(e)
    }
}

export const getItem = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key)
        return value != null ? JSON.parse(value) : null
    } catch (e) {
        // error reading value
        console.log(e)
    }
}

export const removeItem = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (e) {
        // error reading value
        console.log(e)
    }
}

export const clear = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        // error reading value
        console.log(e)
    }
}
```
### 四、使用 react-native-webview 内嵌H5页面
1. 安装 react-native-webview
```
yarn add react-native-webview
```

2. 在页面中使用
```
import { WebView } from 'react-native-webview';

const MyWebView: React.FC = () => {
  return (
    <WebView source={{ uri: 'https://www.baidu.com/' }}/>
  )
}

```

### 四、修改APP名称和图标
1. 打开 android/app/src/main/AndroidManifest.xml文件,找到读取 APP名称和图标的地方：

```
  android:label="@string/app_name"
  android:icon="@mipmap/ic_launcher"
  android:roundIcon="@mipmap/ic_launcher_round"
```

2. 修改APP名称: 打开 android/app/src/main/res/valuse/strings.xml，将string标签下文本替换即可

```
<resources>
    <string name="app_name">APP名称</string>
</resources>
```

3. 修改APP图标: 打开 android/app/src/main/res/mipmap–xxx 文件夹, 将 ic_launcher.png、ic_launcher_round.png图片替换即可

### 五、打包 Android APK
1. 生成一个签名密钥
```
keytool -genkeypair -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

2. 将生成的 my-release-key.keystore 文件放到项目的 android/app 文件夹下

3. 设置 gradle 变量， 在项目的 /android/gradle.properties 添加以下的代码
```
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=*****
MYAPP_RELEASE_KEY_PASSWORD=*****
```

4. 把签名配置加入到项目的 gradle 配置中
```
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                storeFile file(MYAPP_RELEASE_STORE_FILE)
                storePassword MYAPP_RELEASE_STORE_PASSWORD
                keyAlias MYAPP_RELEASE_KEY_ALIAS
                keyPassword MYAPP_RELEASE_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
```

5. 在 package.json 添加以下代码:
```
  "scripts": {
    ...
    "build": "cd android && ./gradlew assembleRelease"
  },
```

6. 执行命令 yarn build ，生成发行 APK 包，文件位于 android/app/build/outputs/apk/release/app-release.apk