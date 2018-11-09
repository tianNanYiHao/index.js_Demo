import { AppRegistry, YellowBox } from 'react-native';
import BaseNavigation from './JavaScript/BaseNavigation';


//消除react-navigation导航组件的警告
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('collectionView', () => BaseNavigation);
