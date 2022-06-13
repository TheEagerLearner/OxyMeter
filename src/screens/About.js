import React from 'react';
import { View,StyleSheet,Text } from 'react-native';

const About = ({navigation}) => {

    return(
        <View style={stylesheet.container}>

            <Text style={stylesheet.heading}>About</Text>

        </View>
    );
}

const stylesheet = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    heading:{
        fontSize:32,
        fontWeight:'bold'
    }
});

export default About;