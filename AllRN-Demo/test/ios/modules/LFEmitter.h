//
//  LFEmitter.h
//  test
//
//  Created by tianNanYiHao on 2019/3/11.
//  Copyright © 2019年 Facebook. All rights reserved.
//

#import <React/RCTEventEmitter.h>

@interface LFEmitter : RCTEventEmitter<RCTBridgeModule>

/**
 在原生oc层调用
 类方法-LFEmiiter提供OC代码发送通知的接口
 用于oc层面触发消息发送给RN
 
 @param desc 消息
 @param args 消息详情
 */
+ (void)postNotiToRN:(NSString*)desc args:(id)args;

@end
