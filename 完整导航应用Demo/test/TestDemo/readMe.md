#跑android编译失败注意事项
##1.
```
**react-native-smart-barcode - 扫码的三方库导入后,
还需要在 ./react-native-smart-barcode/android/src/java/com/reactnativecomponent/barcode/RCTCapturePackage.java中.
                   删除 @override 标识**
```

```
以及 prop-type 导入问题
```

##2. 
```angular2html
导入 react-native-svg 库的时候,编译不通过
需要在 该第三方库的 android/build.gradle中,
将编译出错提示的 goold()删除, 替换成 
  maven {
            url 'https://maven.google.com/'
            name 'Google'
    }
或则 拷贝如下全部替换

def safeExtGet(prop, fallback) {
    rootProject.ext.has(prop) ? rootProject.ext.get(prop) : fallback
}

buildscript {
    repositories {
        jcenter()
        maven {
            url 'https://maven.google.com/'
            name 'Google'
        }
    }

    dependencies {
        //noinspection GradleDependency
        classpath 'com.android.tools.build:gradle:2.2.3'


    }
}

apply plugin: 'com.android.library'

android {
    compileSdkVersion safeExtGet('compileSdkVersion', 26)
    //noinspection GradleDependency
    buildToolsVersion safeExtGet('buildToolsVersion', '26.0.3')

    defaultConfig {
        minSdkVersion safeExtGet('minSdkVersion', 16)
        //noinspection OldTargetApi
        targetSdkVersion safeExtGet('targetSdkVersion', 26)
    }
    lintOptions {
        abortOnError false
    }
}

repositories {
    mavenLocal()
    jcenter()
    maven {
        // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
        url "$rootDir/../node_modules/react-native/android"
    }
    maven {
            url 'https://maven.google.com/'
            name 'Google'
    }
}

dependencies {
    //noinspection GradleDynamicVersion
    compile 'com.facebook.react:react-native:+'
}

```

###3.react-native-view-shot 截图库, 在androd端一样处理
###4.react-native-fs 本地文件访问库, 在androd端一样处理

###5.使用 CamerRoll(仅支持ios)保存图片进相册的时候(报savetoCameraRoll unfinde), 需要xcode中添加静态库依赖,具体百度
###6.使用 CamerRoll 添加iOS info.plist   NSPhotoLibraryUsageDescription/Photo Library Additions Usage Description
暂时记录以上