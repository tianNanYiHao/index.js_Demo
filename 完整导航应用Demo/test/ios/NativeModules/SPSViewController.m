//
//  SPSViewController.m
//  test
//
//  Created by tianNanYiHao on 2019/1/2.
//  Copyright © 2019年 Facebook. All rights reserved.
//

#import "SPSViewController.h"


static SPSViewController *Spsvc;
static NSString *Spsinfo;
@interface SPSViewController ()
{
  
}

@end

@implementation SPSViewController

+(SPSViewController*)sharVC{
  SPSViewController *vc= [[SPSViewController alloc] init];
  vc.view.backgroundColor = [UIColor redColor];
  Spsvc = vc;
  return vc;
}

//取
+ (SPSViewController*)getSpsVC{
  return Spsvc;
}
+ (NSString*)getSpsInfo{
  return Spsinfo;
}

//存
+ (void)setVC:(SPSViewController*)vc{
  Spsvc = vc;
}
+ (void)setSpsInfo:(NSString*)info{
  Spsinfo = info;
}


//清
+ (void)clean{
  Spsinfo = nil;
  Spsvc = nil;
}

//////////////////////////////////////////////////////////////////////


- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
