import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        height: 90,
        flex: 1,
        paddingLeft: 15,
        backgroundColor: colors.mediumturquoise,
        position: 'relative'
    },
    inputContainer: {
        flexDirection: 'row'
    },
    input: {
        width: '65%',
        height: 30,
        padding: 5,
        margin: 10,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: colors.snow
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 10,
        marginRight: 30
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 30,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: colors.beige
    },
    listContainer: {
        width: '100%',
        alignItems: 'center',
        paddingBottom: 20
    },
    notFoundText: {
        marginTop: 50,
        marginHorizontal: 'auto',
        fontSize: 26
    },
    scrollToTopButton: {
        position: 'absolute',
        bottom: 25,
        right: 10
    }
});

export default styles;