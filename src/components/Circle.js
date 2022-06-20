import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const Circle = ({data}) => {
     return(
        <View style={stylesheet.circle_one}>
            <View style={stylesheet.circle_two}>
                <Text style={stylesheet.text_style}>{data}%</Text>
            </View>
        </View>
     );
}

const stylesheet = StyleSheet.create({
    circle_one:{
        //borderWidth:1,
        height:250,
        width:250,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:500,
        backgroundColor:'#44D147',
        position:'relative',
        bottom:100
    },
    circle_two:{
        //borderWidth:1,
        height:180,
        width:180,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:500,
        backgroundColor:'#fff'
    },
    text_style:{
        fontSize:64,
        
    }
});

export default Circle;