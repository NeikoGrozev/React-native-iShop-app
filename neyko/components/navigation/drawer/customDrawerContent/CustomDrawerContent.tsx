import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAppSelector } from "../../../../hooks";
import { getUser, isLoggedIn } from "../../../../store/account/selectors";
import { NavigationProps, PageName } from "../../../../types/navigation";
import { ICON_NAMES } from "../../../../constants/icons";
import styles from "./customDrawerContent.styles";

const CustomDrawerContent = () => {
    const user = useAppSelector(getUser);
    const isAuthenticated = useAppSelector(isLoggedIn);
    const navigation = useNavigation<NavigationProps>();

    const navigateToLogin = () => navigation.navigate(PageName.Account);

    const navigateToCategory = (category: string) => {
        navigation.navigate(PageName.ProductListingScreen, { category });
    };

    const navigateToHomePage = () => navigation.navigate(PageName.Home);
    const navigateToHelpPage = () => navigation.navigate(PageName.Help);

    return (
        <DrawerContentScrollView>
            <View>
                {isAuthenticated && user?.username ? (
                    <View style={styles.welcomeContainer}>
                        <Text >Welcome, <Text style={styles.text}>{user.username}</Text>!</Text>
                    </View>
                ) : (
                    <DrawerItem
                        label='Login'
                        onPress={() => navigateToLogin()}
                        icon={({ size, color }) => (
                            <MaterialCommunityIcons name={ICON_NAMES.LOGIN} size={size} color={color} />
                        )}
                        style={styles.drawerItem} />
                )}
            </View>
            <DrawerItem
                label='Home'
                onPress={() => navigateToHomePage()}
                icon={({ size, color }) => (
                    <MaterialCommunityIcons name={ICON_NAMES.HOME} size={size} color={color} />
                )}
                style={styles.drawerItem}
            />
            <DrawerItem
                label='Men'
                onPress={() => navigateToCategory('men')}
                icon={({ size, color }) => (
                    <MaterialCommunityIcons name={ICON_NAMES.MEN} size={size} color={color} />
                )}
                style={styles.drawerItem}
            />
            <DrawerItem
                label='Women'
                onPress={() => navigateToCategory('women')}
                icon={({ size, color }) => (
                    <MaterialCommunityIcons name={ICON_NAMES.WOMEN} size={size} color={color} />
                )}
                style={styles.drawerItem}
            />
            <DrawerItem
                label='Help'
                onPress={() => navigateToHelpPage()}
                icon={({ size, color }) => (
                    <MaterialCommunityIcons name={ICON_NAMES.HELP} size={size} color={color} />
                )}
                style={styles.drawerItem}
            />
        </DrawerContentScrollView>
    );
};

export default CustomDrawerContent;