//
//  LFEmitter.m
//  test
//
//  Created by tianNanYiHao on 2019/3/11.
//  Copyright © 2019年 Facebook. All rights reserved.
//

#import "LFEmitter.h"
#import <React/RCTBridgeModule.h>

#define NotifactionToEmitterModules @"NotifactionToEmitterModules" //OC层消息中心-消息传递

@interface LFEmitter ()

//1. 用class来声明一个类属性
@property (class,nonatomic,strong) NSString *eventName; //类属性-事件名称
@end

@implementation LFEmitter
RCT_EXPORT_MODULE()

//2. 创建一个静态控件支撑类属性
static NSString * _eventName = nil;

//3. 实现类属性的getter方法
+ (NSString*)eventName{
  if (_eventName == nil) {
    _eventName = [[NSString alloc] init];
  }
  return _eventName;
}

//4. 实现类属性的setter方法
+ (void)setEventName:(NSString *)eventName{
  if (eventName != _eventName) {
    _eventName = eventName;
  }
}


/////////////////////////////// 业务层 ////////////////////////


/**
 供RN层调用
 在RN代码中要添加监听的page页面里,调用该方法,
 设置事件此次事件监听的name标识
 
 @param NSString 事件名
 @return 返回是否设置成功
 */
RCT_EXPORT_METHOD(setNotiNameByType:(NSString*)notiName
                  callBack:(RCTResponseSenderBlock)callBack)
{
  NSLog(@"%@",notiName);
  LFEmitter.eventName = notiName;
  if (LFEmitter.eventName.length>0) {
    callBack(@[@"success"]);
  }else{
    callBack(@[@"error"]);
  }
}



/**
 在原生oc层调用
 类方法-LFEmiiter提供OC代码发送通知的接口
 用于oc层面触发消息发送给RN
 
 @param desc 消息
 @param args 消息详情
 */
+ (void)postNotiToRN:(NSString*)desc args:(id)args{
  
  NSMutableDictionary *dict = [NSMutableDictionary new];
  if (desc == nil) {
    desc= @"";
  }
  if (args == nil) {
    args = @"";
  }
  // 记录消息体
  dict[@"desc"] = desc;
  dict[@"args"] = args;
  [[NSNotificationCenter defaultCenter] postNotificationName:NotifactionToEmitterModules object:dict];
}


/**
 重写实例方法-返回所有支持的监听名称数组
 这里通过RN先调用 setNotiNameByType 方法 设置好本事件监听名称

 @return
 */
- (NSArray<NSString *> *)supportedEvents{
  return @[LFEmitter.eventName];
}


/**
 重写实例方法-启动监听服务
 */
- (void)startObserving{
  [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(emitterEvent:) name:NotifactionToEmitterModules object:nil];
}


/**
 重写实例方法-关闭监听服务
 */
- (void)stopObserving{
  [[NSNotificationCenter defaultCenter] removeObserver:self];
}


/**
 接受到消息通知-转发RN层
 
 @param noti 消息体
 */
- (void)emitterEvent:(NSNotification*)noti{
  [self sendEventWithName:LFEmitter.eventName body:noti.object];
}


@end
