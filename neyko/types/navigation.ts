import { DrawerNavigationProp } from "@react-navigation/drawer"
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export enum PageName {
    Home = 'Home',
    HomeScreen = 'Home Screen',
    ProductListingScreen = 'Product Listing Screen',
    ProductDetailsScreen = 'Product Details Screen',
    Account = 'Account',
    AccountScreen = 'Account Screen',
    Cart = 'Cart',
    CartScreen = 'Cart Screen',
    Help = 'Help',
    OrderHistory = 'Order History',
    Legal = 'Legal'
};

export enum DrawerName {
    Drawer = 'TabNav'
};

export type PageParam = {
    [PageName.Home]: undefined,
    [PageName.HomeScreen]: undefined,
    [PageName.ProductListingScreen]: { category: string } | undefined,
    [PageName.ProductDetailsScreen]: { productId: string },
    [PageName.Account]: undefined,
    [PageName.AccountScreen]: undefined,
    [PageName.Cart]: undefined,
    [PageName.CartScreen]: undefined,
    [PageName.Help]: undefined
    [PageName.OrderHistory]: undefined,
    [PageName.Legal]: undefined
};

export type PLPRouteProps = RouteProp<PageParam, PageName.ProductListingScreen>;

export type NavigationProps = CompositeNavigationProp<
    DrawerNavigationProp<PageParam>,
    NativeStackNavigationProp<PageParam>
>;