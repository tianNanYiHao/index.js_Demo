//
//  TestNativeModule.m
//  test
//
//  Created by tianNanYiHao on 2018/12/24.
//  Copyright © 2018年 Facebook. All rights

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

RCTPromiseResolveBlock ResolveBlock; //Promise返回成功
RCTPromiseRejectBlock RejectBlock;   //Promise返回失败

@interface TestNativeModule : NSObject<RCTBridgeModule>

@end

@implementation TestNativeModule

//导出本类
RCT_EXPORT_MODULE();

/*
 导出本类方法:showTestNativeModuleName
 */
RCT_EXPORT_METHOD(showTestNativeModuleName:(NSString *)name){
  NSLog(@"这是RN调用ios原生打印的日志! 调用的方法名为:showTestNativeModuleName :%@",name);
}

RCT_EXPORT_METHOD(showTestNativeModuleName:(NSString *)name success:(RCTPromiseResolveBlock)ResolveBlock error:(RCTPromiseRejectBlock)RejectBlock){
  
  ResolveBlock(@"00000");
  
}






@end
