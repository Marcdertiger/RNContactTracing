//
//  RNContactTracingios.m
//  DistanceNB
//
//  Created by Marc-Andre Couturier on 2020-05-05.
//

#import <React/RCTLog.h>
#import "RNContactTracingios.h"

@implementation RNContactTracingios

// To export a module named CalendarManager
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback)
{
  callback(@[@"Hello from native iOS."]);
}


@end
