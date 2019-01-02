import { AppRegistry } from 'react-native';
import App from './App';
import SPS from './SpsDemo/SpsPage'


AppRegistry.registerComponent('test', () => App);
AppRegistry.registerComponent('SPS', () => SPS);  // sps模拟了杉德宝sps,测试时,可以用模拟久彰App的demo进行测试触发!
