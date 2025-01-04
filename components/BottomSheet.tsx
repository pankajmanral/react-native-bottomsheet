import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { Image, StyleSheet, Text, View } from 'react-native'

interface BottomSheetProp {
    onClose : () => void,
    imageUrl : string,
    imageName : string,
    imageDesc : string
}

const BottomSheetComponent = ({ onClose, imageUrl, imageName, imageDesc } : BottomSheetProp) => {

    return (
        <GestureHandlerRootView>
            <BottomSheet
                snapPoints={["90%"]}
                index={0}
                enablePanDownToClose = {true}
                onClose={onClose}
                handleIndicatorStyle={{display:'none'}}     
                handleStyle={{display:'none'}}
                animationConfigs={{
                    duration : 300
                }}
            >   
                <BottomSheetView style={styles.bottomsheet}>
                    <Image source={{uri:imageUrl}} style={styles.image}/>
                    <View style={{flex : 1}}>
                        <Text style={{color : "black",fontSize : 20, textAlign:'center',marginTop:10}}>{imageName}</Text>
                        <Text style={{color : "black",fontSize : 18, textAlign:'center',paddingHorizontal:20,marginTop:10}}>{imageDesc}</Text>
                    </View>
                </BottomSheetView>
            </BottomSheet>
        </GestureHandlerRootView>
    )

}

const styles = StyleSheet.create({
    bottomsheet : {
        flex : 1,
    },
    image : {
        flex : 1,
    },
    headerIndicator : {
        height : 0,
    }
})

export default BottomSheetComponent