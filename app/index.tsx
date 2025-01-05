// link for reference drawer
// https://youtu.be/KRHdDGVrItw

import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Some from "./some"
import Index from './home'

const App = () => {

    const Drawer = createDrawerNavigator()

    return (
        <NavigationIndependentTree>
            <NavigationContainer>
                <Drawer.Navigator screenOptions={{drawerStyle : { borderTopRightRadius : 0, borderBottomRightRadius:0, paddingVertical : 10 }, drawerActiveTintColor : "green" , drawerType : 'front' ,swipeEnabled:true}} >
                    <Drawer.Screen name="Home" component={Some}></Drawer.Screen>
                    <Drawer.Screen name="Wallpapers" component={Index}></Drawer.Screen>
                </Drawer.Navigator>
            </NavigationContainer>
        </NavigationIndependentTree>
    )

}

export default App