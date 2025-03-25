import { useState } from "react";
import { Dimensions, Image, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import TextView from "../textView/TextView";
import styles from "./imageCarousel.styles";

interface ImageCarouselProp {
    imageUrls: string[]
};

const ImageCarousel = ({ imageUrls }: ImageCarouselProp) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const dimensions = Dimensions.get('window');

    return (
        <View style={styles.container}>
            <View style={styles.imageCounter}>
                <TextView>{currentIndex + 1}/{imageUrls.length}</TextView>
            </View>
            <Carousel
                loop
                width={dimensions.width * 0.8}
                height={dimensions.height * 0.4}
                autoPlay={true}
                data={imageUrls}
                scrollAnimationDuration={2000}
                onSnapToItem={setCurrentIndex}
                mode="parallax"
                renderItem={({ item }) => {
                    return <Image source={{ uri: item }} style={styles.image}></Image>
                }}
            />
        </View>
    );
};

export default ImageCarousel;