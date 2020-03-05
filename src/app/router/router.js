import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PestList from '../pages/PestList/PestList';
import ViewFeedback from '../pages/ViewFeedback/ViewFeedback';
import Login from '../pages/Login/Login';

const Navigation = createStackNavigator({
    Login:{
        screen : Login
    },
    Home:{
        screen: PestList
    },
    FeedBack:{
        screen: ViewFeedback,navigationOptions:{
            headerShown: true
        }
    }
},{
    initialRouteName: 'Login',
    defaultNavigationOptions:{
        headerShown: false,
        headerTitle: false
    }
})
export default createAppContainer(Navigation);
