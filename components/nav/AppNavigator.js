import { createStackNavigator } from 'react-navigation-stack';
import Home from '../ui/Home';
import Inputs from '../ui/Inputs';
import TakePhoto from '../ui/TakePhoto'
import Whiteboard from '../ui/Whiteboard';
import InputText from '../ui/InputText';


const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Inputs: {screen: Inputs},
    TakePhoto: {screen: TakePhoto},
    Whiteboard: {screen: Whiteboard},
    InputText: {screen: InputText},
});

export default AppNavigator;