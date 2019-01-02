/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import "SPSViewController.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"test"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}


-(BOOL)application:(UIApplication *)application handleOpenURL:(NSURL *)url{
  // sps
  [self handleSps:url];
  return YES;
  
}

-(BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options{
  // sps
  [self handleSps:url];
  return YES;
}

- (BOOL)handleSps:(NSURL*)url{
  // sandbaoApp://sandbao/sps?tn=decabe70d0e529c0907199b413a24592&scheme=com.sand.moniJiuZhangApp
  NSLog(@"====>%@",url.description);
  
  
  
  
  
  
  
  
  NSURL *jsCodeUrl;
  jsCodeUrl = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  RCTRootView *rtView = [[RCTRootView alloc] initWithBundleURL:jsCodeUrl moduleName:@"SPS" initialProperties:nil launchOptions:nil];
  rtView.bounds = self.window.bounds;
  rtView.center = self.window.center;
  
  // 防止多次创建实例及present模态切换!
  if (![SPSViewController getSpsVC]) {
    [SPSViewController setVC:[SPSViewController sharVC]];
    [SPSViewController setSpsInfo:url.description];
    [[SPSViewController getSpsVC].view addSubview:rtView];
    [self.window.rootViewController presentViewController:[SPSViewController getSpsVC] animated:YES completion:nil];
  }
  return true;
}

@end
