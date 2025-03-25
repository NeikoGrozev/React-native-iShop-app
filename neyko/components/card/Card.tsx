import React from "react";
import { Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { CardProps } from "../../interface/CardProps";
import { styles } from "./card.styles";

const Card = ({id, name, image}: CardProps) => {
    return (
        <View style={styles.container}>
            <FastImage
                style={styles.image}
                source={{
                    uri: image,
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
            />
            <Text>{name}</Text>
        </View>
    );
};

export default Card;