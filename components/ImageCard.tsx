import { Image, StyleSheet, View } from "react-native"

interface ImageCardProp {
    imageUrl : string
}

const ImageCardComponent = ({ imageUrl } : ImageCardProp) => {

    return (
        <View>
            <Image style={styles.image} source={{uri:imageUrl}}/>
        </View>
    )

}

const styles = StyleSheet.create({
    image : {
        height : 300,
        width : 190,
        borderRadius : 20,
        marginBottom : 10
    }
})

export default ImageCardComponent