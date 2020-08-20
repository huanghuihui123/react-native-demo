package com.myapp;

import android.os.Bundle;  // 1.启动页配置
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // 2.启动页配置
public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "MyApp";
  }

  // 3.启动页配置
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);  // here 
    super.onCreate(savedInstanceState);
  }

}
