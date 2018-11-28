/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-11-26 16:42
 * @Profile:  pxdp
 * @Project:  test

 * @Description:
 *
 */


import React, {Component} from 'react'
import {Dimensions} from 'react-native'


const defaultHeight = 667;
const defaultWidth = 375;
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').widget;

const fixHeight = (h) => {
    return h * (height / defaultHeight);
};

const fixWidth = (w) => {
    return w * (width / defaultWidth);
};

export default Window = {
    height: height,
    width: width,
    fixHeight,
    fixWidth,
}

