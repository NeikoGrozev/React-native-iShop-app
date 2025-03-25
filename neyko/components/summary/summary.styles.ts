import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.beige,
        width: '95%',
        marginTop: 10,
        marginLeft: 10,
        borderWidth: 5,
        borderColor: colors.gold,
        borderRadius: 5,
    },
    title: {
        textTransform: 'uppercase',
        fontSize: 20,
        marginBottom: 5
    },
    rowContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 2
    },
    subtitle: {
        fontSize: 18,
        width: '80%'
    },
    rowValue: {
        textAlign: 'right',
        width: '18%'
    },
    separator: {
        width:'100%',
        height: 1,
        backgroundColor: colors.gold,
        marginHorizontal: 'auto',
        marginVertical: 5
    }
});

export default styles;