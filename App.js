import { StackNavigator } from 'react-navigation';

import GetStarted from './screens/GetStarted/GetStarted';
import Intro from './screens/Intro/Intro';
import Login from './screens/Login/Login';
import Main from './screens/Main/Main';

export default StackNavigator({
    getStarted: GetStarted,
    intro: Intro,
    login: Login,
    main: Main,
}, {
    initialRouteName: 'getStarted',
});
