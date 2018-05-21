import { StackNavigator } from 'react-navigation';

import carListView from '../carListView/carListView';

const carRouter = StackNavigator({

    carLiastNav: {
        screen: carListView,
        navigationOptions: {
            headerTitle: '汽车列表页',
        }
    }

});


export default carRouter;