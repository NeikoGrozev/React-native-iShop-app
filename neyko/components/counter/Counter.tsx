import { useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const onPressHandler = () => {
        Alert.alert(
            'Counter',
            'Choose to increment or decrement the counter',
            [
                { text: 'Increment', onPress: () => setCounter(counter + 1) },
                { text: 'Reset', onPress: () => setCounter(0) },
                { text: 'Decrement', onPress: () => setCounter(counter - 1)}
            ]
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Counter: {counter}</Text>
            <Button title="Change counter" onPress={onPressHandler} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    }
});

export default Counter;