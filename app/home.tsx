    import BottomSheetComponent from "@/components/BottomSheet"
    import ImageCardComponent from "@/components/ImageCard"
    import ParallaxScrollView from "@/components/ParallaxScrollView"
    import { useState } from "react"
    import { Image, TouchableOpacity } from "react-native"
    import { StyleSheet, View } from "react-native"

    const Index = () => {

        const imageData = [
            {url : "https://images.unsplash.com/photo-1733690210785-8a48c7895083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",name:'Lorem',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!'},
            {url : "https://plus.unsplash.com/premium_photo-1725708358944-844db020a73a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",name:'Lorem',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!'},
            {url : "https://images.unsplash.com/photo-1732484269142-50a81554221c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",name:'Lorem',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!'},
            {url : "https://images.unsplash.com/photo-1728650388218-c10708026ad3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",name:'Lorem',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!'},
            {url : "https://images.unsplash.com/photo-1730119986244-eb33b57b3950?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D",name:'Lorem',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!'},
            {url : "https://images.unsplash.com/photo-1731450453063-31716e7b71af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D",name:'Lorem',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!'},
            {url : "https://images.unsplash.com/photo-1729366791089-6c9643dee806?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D",name:'Lorem',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!'}
        ]

        const [isOpen, setIsOpen] = useState(false)
        const [selectedImage, setSelectedImage] = useState(null)
        const [selectedImageName, setSelectedImageName] = useState(null)
        const [selectedImageDesc, setSelectedImageDesc] = useState(null)

        const handleImagePress = (data) => {
            setSelectedImage(data.url)
            setSelectedImageName(data.name)
            setSelectedImageDesc(data.desc)
            setIsOpen(true)
        }

        return (
            <View style={styles.container}>
                <ParallaxScrollView headerBackgroundColor={{dark:'black', light:'white'}} headerImage={<Image style={styles.image} source={{uri:'https://images.unsplash.com/photo-1729006076780-ad0b5313b61e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8'}}/> }>
                    <View style={styles.images}>
                        {imageData.map((data,index)=>{
                            return (
                            <TouchableOpacity onPress={()=>{handleImagePress(data)}}>
                                    <ImageCardComponent 
                                        key={index}
                                        imageUrl = {data.url}
                                    />
                            </TouchableOpacity>
                            )
                        })}
                    </View>
                </ParallaxScrollView>
                <View style={StyleSheet.absoluteFill}>
                    { isOpen && <BottomSheetComponent onClose={()=>{setIsOpen(false)}} imageUrl ={selectedImage} imageName={selectedImageName} imageDesc={selectedImageDesc}/> }
                </View>
            </View>
        )

    }

    const styles = StyleSheet.create({
        container : {
            flex : 1,
        },
        image : {
            flex : 1,
        },
        images : {
            padding : 10,
            flexWrap : "wrap",
            flexDirection : "row",
            gap : 6
        }
    })

    export default Index