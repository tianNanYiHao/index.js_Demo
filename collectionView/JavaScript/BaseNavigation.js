import { StackNavigator } from 'react-navigation';


import CollectionView from '../JavaScript/collectionView';
const BaseNavigation = StackNavigator({

    //首页
    HomeNav: {
        screen: CollectionView,
        navigationOptions: {
            headerTitle: '首页',
        }
    },
    // //我的
    // MyNav: {

    // },
    // //个人中心
    // CenterNav: {

    // },
    // //其他
    // OtherNav: {

    // }
});



export default BaseNavigation;

