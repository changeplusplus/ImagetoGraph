import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Inputs from '../screens/Inputs';
import TakePhoto from '../screens/TakePhoto'
import Whiteboard from '../screens/Whiteboard';
import InputText from '../screens/InputText';


const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Inputs: {screen: Inputs},
    TakePhoto: {screen: TakePhoto},
    Whiteboard: {screen: Whiteboard},
    InputText: {screen: InputText},
});

export default AppNavigator;