import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Cart from "../../../screen/cart/Cart";
import { NavigationProps, PageName } from "../../../types/navigation";
import { ICON_NAMES } from "../../../constants/icons";

const CartStackNav = () => {
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
            <Stack.Screen name={PageName.CartScreen} component={Cart} />
        </Stack.Navigator>
    );
};

export default CartStackNav;