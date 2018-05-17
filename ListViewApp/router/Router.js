
import {
	StackNavigator,
} from 'react-navigation';

import Lunch from '../Lunch/Lunch';

const Router = StackNavigator({
	RTLunch: { screen: Lunch },
});

export default Router;