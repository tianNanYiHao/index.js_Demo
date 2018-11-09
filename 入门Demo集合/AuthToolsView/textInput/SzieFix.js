
import { 
    Dimensions
 } from 'react-native';

 // 屏幕高度
export const screenW = Dimensions.get('window').width;

// 屏幕宽度
export const sceeenH = Dimensions.get('window').height;

// 屏幕宽度与6s屏幕的比例
export const presentW = screenW / 375;

// 屏幕高度与6s屏幕的比例
export const presentH = sceeenH / 667;

// 计算真实宽度
export const fixScreenW = (w) => {
    return w * presentW;
}

// 计算真实高度
export const fixScreenH = (H) => {
    return H * presentH;
}




