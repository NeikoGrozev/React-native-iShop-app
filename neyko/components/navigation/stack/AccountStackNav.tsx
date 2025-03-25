import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Account from "../../../screen/account/Account";
import OrderHistory from "../../../screen/orderHistory/OrderHistory";
import Legal from "../../../screen/legal/Legal";
import { NavigationProps, PageName } from "../../../types/navigation";
import { ICON_NAMES } from "../../../constants/icons";

const AccountStackNav = () => {
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
            <Stack.Screen name={PageName.AccountScreen} component={Account} />
            <Stack.Screen name={PageName.OrderHistory} component={OrderHistory} />
            <Stack.Screen name={PageName.Legal} component={Legal} />
        </Stack.Navigator>
    );
};

export default AccountStackNav;