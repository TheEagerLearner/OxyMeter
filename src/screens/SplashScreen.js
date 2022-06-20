import React from 'react';
import { View,StyleSheet,Text ,Image} from 'react-native';

const SplashScreen = ({navigation}) => {


    setTimeout(()=>{
        navigation.navigate("Home");
    },3000);

    return(
        <View style={stylesheet.container}>

            <Image 
                style={stylesheet.background_image}
                source={require('./../img/splash.png')}    
            />

        </View>
    );
}

const stylesheet = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    background_image:{
        position:'absolute',
        height:'100%',
        width:'100%'
    }

});

export default SplashScreen;