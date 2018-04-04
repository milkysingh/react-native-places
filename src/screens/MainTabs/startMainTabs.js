import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
const startTabs = async () => {
  const map = await Icon.getImageSource('md-map', 30);
  const share = await Icon.getImageSource('ios-share-alt', 30);
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'awesome-places.FindPlaceScreen',
        label: 'Find Place',
        title: 'Find Place',
        icon: map
      },
      {
        screen: 'awesome-places.SharePlaceScreen',
        label: 'Share Place',
        title: 'Share Place',
        icon: share
      }
    ]
  });
};
export default startTabs;
