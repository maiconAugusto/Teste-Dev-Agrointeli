import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PestList from '../pages/PestList/PestList';
import ViewFeedback from '../pages/ViewFeedback/ViewFeedback';
import Login from '../pages/Login/Login';

const Navigation = createStackNavigator({
    Login:{
        screen : Login,navigationOptions:{
            headerShown : false
        }
    },
    Home:{
        screen: PestList, navigationOptions:{
            headerShown: false
        }
    },
    FeedBack:{
        screen: ViewFeedback, navigationOptions:{
            headerTitle: false
        }
    }
},{
    initialRouteName: 'Login'
})
export default createAppContainer(Navigation);
