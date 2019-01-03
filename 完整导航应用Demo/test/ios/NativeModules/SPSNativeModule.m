//
//  SPSNativeModule.m
//  test
//
//  Created by tianNanYiHao on 2019/1/2.
//  Copyright © 2019年 Facebook. All rights reserved.
//




#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import "SPSViewController.h"
#import "AppDelegate.h"

RCTPromiseResolveBlock rctPromiseResolveBlock;
RCTPromiseRejectBlock rctPromiseRejectBlock;
RCTResponseSenderBlock rctResponseSenderBlock;


//判断系统版本
#define IOS_VERSION_8 (([[[UIDevice currentDevice] systemVersion] floatValue] >=8.0 && [[[UIDevice currentDevice] systemVersion] floatValue] <=9.0)? (YES):(NO))
#define IOS_VERSION_9 (([[[UIDevice currentDevice] systemVersion] floatValue] >=9.0 && [[[UIDevice currentDevice] systemVersion] floatValue] <=10.0)? (YES):(NO))
#define IOS_VERSION_10 (([[[UIDevice currentDevice] systemVersion] floatValue] >=10.0 && [[[UIDevice currentDevice] systemVersion] floatValue] <=11.0)? (YES):(NO))
#define IOS_VERSION_11 (([[[UIDevice currentDevice] systemVersion] floatValue] >=11.0)? (YES):(NO))

@interface SPSNativeModule:NSObject<RCTBridgeModule>
{
  UIWindow *window;
}
@end

@implementation SPSNativeModule

RCT_EXPORT_MODULE()

//获取支付结果并退出SPS->使用callBack方式 进行通信
RCT_EXPORT_METHOD(getPayInfoAndDismissSps:(RCTResponseSenderBlock)callBack){
  
  // sandbaoApp://sandbao/sps?tn=decabe70d0e529c0907199b413a24592&scheme=com.sand.moniJiuZhangApp
  NSString *info = [SPSViewController getSpsInfo];
  NSArray *arr = [info componentsSeparatedByString:@"="];
  NSString *scheme = [arr lastObject];
  NSString *tn = [[arr[1] componentsSeparatedByString:@"&"] firstObject];
  // 获取来源App的Scheme
  callBack(@[scheme,tn]);
  [[SPSViewController getSpsVC] dismissViewControllerAnimated:YES completion:^{
    [SPSViewController clean];
  }];
  
}

//获取支付结果并退出SPS->使用Promise方式进行通信,切记resolve及reject在方法名上都要回调,否则报错
RCT_EXPORT_METHOD(getPayInfoAndDismissSps2:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject){
  
  // sandbaoApp://sandbao/sps?tn=decabe70d0e529c0907199b413a24592&scheme=com.sand.moniJiuZhangApp
  NSString *info = [SPSViewController getSpsInfo];
  NSArray *arr = [info componentsSeparatedByString:@"="];
  NSString *scheme = [arr lastObject];
  NSString *tn = [[arr[1] componentsSeparatedByString:@"&"] firstObject];
  
  resolve(@[scheme,tn]);
  [[SPSViewController getSpsVC] dismissViewControllerAnimated:YES completion:^{
    [SPSViewController clean];
  }];
}


//退出sps后,回跳商户App,并返回相应的支付结果!
RCT_EXPORT_METHOD(openBack:(NSString*)scheme tn:(NSString*)tn responseCode:(NSString*)responseCode){
  //@"%@://sandbao/sps?tn=%@&respCode=%@",
  NSString *urlString = [NSString stringWithFormat:@"%@://sandbao/sps?tn=%@&respCode=%@",scheme,tn,responseCode];
  NSURL *url2 = [[NSURL alloc] initWithString:urlString];
  [SPSNativeModule openUrl:url2];
}


#pragma mark - url跳转
/**
 url跳转
 
 @param url 地址
 */
+ (void)openUrl:(NSURL*)url{
  
  if (IOS_VERSION_9 || IOS_VERSION_8) {
    [[UIApplication sharedApplication] openURL:url];
  }else{
    [[UIApplication sharedApplication] openURL:url options:@{} completionHandler:nil];
  }
}

@end
