import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from '../../src/Main';
import Login from '../../src/pages/Login';
import Comments from '../../src/pages/Comments';
import Profile from '../../src/pages/Profile';

const Navigation = createStackNavigator({
    Main: { screen: Main },
    Login: { screen: Login },
    Comments: { screen: Comments },
    Profile: { screen: Profile }
},
    {
        initialRouteName: 'Main',
        
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#fff',
            },
           
            headerTintColor: '#898989',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export default createAppContainer(Navigation);