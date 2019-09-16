package com.test;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.tron.ReactNativeWheelPickerPackage;
import com.tron.ReactNativeWheelPickerPackage;
import com.henninghall.date_picker.DatePickerPackage;
import com.henninghall.date_picker.DatePickerPackage;
import com.rnfs.RNFSPackage;
import com.RNFetchBlob.RNFetchBlobPackage;


import fr.greweb.reactnativeviewshot.RNViewShotPackage;

import com.horcrux.svg.SvgPackage;
import com.react.rnspinkit.RNSpinkitPackage;
import com.reactnativecomponent.barcode.RCTCapturePackage;

import modules.NativeModulesPackage;

import com.microsoft.codepush.react.CodePush;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {
    private ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        //private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

        @Override
        protected String getJSBundleFile() {
            return CodePush.getJSBundleFile();
        }

        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
            new ReactNativeWheelPickerPackage(),
            new ReactNativeWheelPickerPackage(),
            new DatePickerPackage(),
            new DatePickerPackage(),
                    new RNFSPackage(),
                    new RNFetchBlobPackage(),
                    new RNViewShotPackage(),
                    new SvgPackage(),
                    new RNSpinkitPackage(),
                    new RCTCapturePackage(),
                    new NativeModulesPackage(),
                    new CodePush(null, getApplicationContext(), BuildConfig.DEBUG)
            );
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };


    //添加
    public void setReactNativeHost(ReactNativeHost reactNativeHost) {
        mReactNativeHost = reactNativeHost;
    }

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }
}
