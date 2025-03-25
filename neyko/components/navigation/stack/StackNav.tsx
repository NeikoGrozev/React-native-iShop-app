import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../../../screen/home/Home';
import ProductListPage from '../../../screen/productListPage/ProductListPage';
import ProductDetailsPage from '../../../screen/productDetailsPage/ProductDetailsPage';
import Help from '../../../screen/help/Help';
import { NavigationProps, PageName } from '../../../types/navigation';
import { ICON_NAMES } from '../../../constants/icons';

const StackNav = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation<NavigationProps>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <MaterialCommunityIcons name={ICON_NAMES.MENU} size={28} style={{ marginLeft: 0 }} />
          </TouchableOpacity>
        )
      }}
    >
      <Stack.Screen name={PageName.HomeScreen} component={Home} />
      <Stack.Screen name={PageName.ProductListingScreen} component={ProductListPage} />
      <Stack.Screen name={PageName.ProductDetailsScreen} component={ProductDetailsPage} />
      <Stack.Screen name={PageName.Help} component={Help} />
    </Stack.Navigator>
  );
};

export default StackNav;