package modules;


import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Environment;
import android.util.Base64;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;


//创建自定义模块 - 保存base64图片到相册!!
public class SaveImgBase64 extends ReactContextBaseJavaModule {

    Context mContext;

    public SaveImgBase64(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
    }

    @Override
    // 设置模块名称，需要与RN中调用时的模块名称保持一致
    public String getName() {
        return "SaveImgBase64";
    }


    @ReactMethod
    public boolean savePicture(String base64DataStr) {
//         1.去掉base64中的前缀 -
//        String base64Str = base64DataStr.substring(base64DataStr.indexOf(",") + 1, base64DataStr.length());



        String base64Str = base64DataStr;
        // 获取手机相册的路径地址
        String galleryPath = Environment.getExternalStorageDirectory()
                + File.separator + Environment.DIRECTORY_DCIM
                + File.separator + "Camera" + File.separator;
        //创建文件来保存，第二个参数是文件名称，可以根据自己来命名
        File file = new File(galleryPath, System.currentTimeMillis() + ".png");
        String fileName = file.toString();
        // 3. 解析保存图片
        byte[] data = Base64.decode(base64Str, Base64.DEFAULT);

        for (int i = 0; i < data.length; i++) {
            if (data[i] < 0) {
                data[i] += 256;
            }
        }
        OutputStream os = null;
        try {
            os = new FileOutputStream(fileName);
            os.write(data);
            os.flush();
            os.close();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        } finally {
            //通知相册更新
            Intent intent = new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE);
            Uri uri = Uri.fromFile(file);
            intent.setData(uri);
            mContext.sendBroadcast(intent);

            Toast.makeText(mContext,"相册保存成功!", Toast.LENGTH_LONG).show();
        }

    }
}
