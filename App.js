//required imports
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './src/screens/Home';
import SplashScreen from "./src/screens/SplashScreen";
import About from "./src/screens/About";


const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>

                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="About" component={About} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;