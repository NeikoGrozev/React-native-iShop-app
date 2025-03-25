import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/colors";

const styles = StyleSheet.create({
    welcomeContainer: {
        color: colors.deepskyblue,
        marginHorizontal: 'auto',
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderBottomColor: colors.mediumturquoise,
        borderBottomWidth: 1
    },
    text: {
        textTransform: 'uppercase'
    },
    drawerItem: {
        borderBottomWidth: 1,
        borderBottomColor: colors.gold
    }
});

export default styles;