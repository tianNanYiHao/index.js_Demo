//
//  SPSViewController.h
//  test
//
//  Created by tianNanYiHao on 2019/1/2.
//  Copyright © 2019年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface SPSViewController : UIViewController
+(SPSViewController*)sharVC;

//取
+ (SPSViewController*)getSpsVC;
+ (NSString*)getSpsInfo;

//存
+ (void)setVC:(SPSViewController*)vc;
+ (void)setSpsInfo:(NSString*)info;

//清
+ (void)clean;
@end
