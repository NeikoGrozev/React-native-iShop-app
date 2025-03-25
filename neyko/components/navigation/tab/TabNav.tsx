import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAppSelector } from '../../../hooks';
import StackNav from '../stack/StackNav';
import AccountStackNav from '../stack/AccountStackNav';
import CartStackNav from '../stack/CartStackNav';
import { getTotalQuantity } from '../../../store/cart/selectors';
import { PageName } from '../../../types/navigation';
import { colors } from '../../../constants/colors';

const TabNav = () => {
    const Tab = createBottomTabNavigator();
    const badgeCount = useAppSelector(getTotalQuantity);

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                return <MaterialCommunityIcons name={route.name.toLowerCase() ?? ''} size={size} color={color} />;
            },
            headerShown: false,
            tabBarStyle: {
                marginVertical: 10,
                marginHorizontal: 20,
                position: 'absolute',
                borderRadius: 10
            },
            tabBarBadgeStyle: {
                color: colors.white,
                backgroundColor: colors.red,
                fontWeight: 'bold'
            }
        })}
            initialRouteName={PageName.Home}>
            <Tab.Screen name={PageName.Home} component={StackNav} />
            <Tab.Screen name={PageName.Account} component={AccountStackNav} />
            <Tab.Screen
                name={PageName.Cart}
                component={CartStackNav}
                options={{ tabBarBadge: badgeCount || undefined }}
            />
        </Tab.Navigator>
    );
};

export default TabNav;