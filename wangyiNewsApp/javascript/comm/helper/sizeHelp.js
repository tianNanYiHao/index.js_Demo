

import {
    Dimensions
} from 'react-native';

export const screenW = Dimensions.get('window').width;
export const screeH = Dimensions.get('window').height;
export const percentW = screenW / 375;
export const percentH = screeH / 667;

export const fitSizeW = (sizeW) => {
    return sizeW * percentW;
}

export const fitSizeH = (szieH) => {
    return szieH * percentH;
}


