// RNContactTracingAndroid.java

package com.distancenb;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import java.util.Map;
import java.util.HashMap;

public class RNContactTracingAndroid extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;

  private static final String DURATION_SHORT_KEY = "SHORT";
  private static final String DURATION_LONG_KEY = "LONG";

  RNContactTracingAndroid(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

   @Override
  public String getName() {
    return "RNContactTracingAndroid";
  }

    @ReactMethod
  public void addEvent(String message) {
      System.out.println("**************"+message);
    //Toast.makeText(getReactApplicationContext(), message, duration).show();
  }

   @ReactMethod
  public void findEvents(String message, Callback errorCallback, Callback successCallback) {
      System.out.println("************** Callback Example"+message);

      successCallback.invoke("Hello from native android.");
      
  }

}