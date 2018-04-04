import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import FindPlace from './src/screens/FindPlace/FindPlace';
import SharePlace from './src/screens/SharePlace/SharePlace';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();

//Register screens before we load them.
Navigation.registerComponent(
  'awesome-places.AuthScreen',
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  'awesome-places.FindPlaceScreen',
  () => FindPlace,
  store,
  Provider
);
Navigation.registerComponent(
  'awesome-places.SharePlaceScreen',
  () => SharePlace,
  store,
  Provider
);
//Start an App'

Navigation.startSingleScreenApp({
  screen: {
    screen: 'awesome-places.AuthScreen',
    title: 'Login'
  }
});
