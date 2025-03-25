import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        backgroundColor: colors.beige,
        borderRadius: 5,
        flexDirection: 'row',
        height: 100,
        position: 'relative'
    },
    containerRow:{
        width: '86%',
    },
    infoContainer: {
        paddingLeft: 2
    },
    titleContainer: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        fontSize: 18,
        paddingRight: 20
    },
    detailsContainer: {
        flexDirection: 'row',
    },
    detailsLeftContainer: {
        width: 140
    },
    detailsRightContainer: {
        width: 130,
        alignItems: 'center',
    },    
    image: {
        width: 100,
        height: '100%',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    variationValue: {
        color: colors.lightskyblue
    },
    price: {
        color: colors.deepskyblue
    },
    quantityContainer: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    },
    quantityButton: {
        width: 30,
        height: 30,
        borderColor: colors.darkgrey,
        backgroundColor: colors.gainsboro,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    },
    quantity: {
        fontSize: 18
    },
    totalPriceContainer: {
        marginTop: 10,
        flexDirection: 'row',
        fontSize: 12
    },
    removeProduct: {
        width: 15,
        height: 15,
        borderColor: colors.darkgrey,
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: colors.gainsboro,
        position: 'absolute',
        top: 3,
        right: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    removeProductText: {
        fontSize: 10,
        width: 10,
        height: 15
    },
    totalPrice: {
        color: colors.red,
        fontSize: 12
    }
});

export default styles;