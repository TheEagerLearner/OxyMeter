import React from 'react';
import { View,StyleSheet,Text,ScrollView,Image } from 'react-native';

const About = ({navigation}) => {

    return(
        <View style={stylesheet.container}>

            <Image 
                style={stylesheet.logo}
                source={require('./../img/logo.png')}
            />
            <Text style={stylesheet.description}>
            Oxygen concentrator is a product made by our team 'Try to Science' of which the
            project members include Sahil Chitrapur, Keenan Cardozo, Akshay Batule, Shahul
            Ahmed and Nirbhay Borkar guided by Prof. Gaurish Samant. The demand for
            portable medical grade oxygen supply for the COVID 19 patients has increased
            tremendously during this pandemic. Due to their size and weight the available
            oxygen cylinders have limited portability which results in restricted mobility of
            the patients as well as difficulty in continuously replacing them. The available
            oxygen concentrators are mostly being imported or either assembled in India
            which comes at a very high cost to the customers pocket and also weren’t
            reliable due to the high moisture content in India. During the 2nd wave for a
            daily demand of 10,000 oxygen concentrators India was just able to produce 90
            oxygen concentrators creating a heavy load in the healthcare industry. 
            </Text>

            <Text style={stylesheet.description}>
            This is what inspired us and gave us the idea to develop a low cost oxygen
            concentrator for personal and medical application having the capability to adapt
            and operate in the Indian environment and produce a high oxygen flow rate with
            the recommended purity.
            </Text>

            <View>
                <Image 
                    style={stylesheet.mentor}
                    source={require('./../img/team/mentor.png')}
                />
                <Text style={{
                    textAlign:'center',
                    fontWeight:'bold'
                }}>Prof. Gaurish Samant</Text>
                <Text style={{
                    textAlign:'center',
                    fontWeight:'bold'
                    
                }}>MENTOR</Text>
            </View>

        </View>
    );
}

const stylesheet = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff'
    },
    logo:{
        marginTop:40,
        height:200,
        width:200
    },
    description:{
        textAlign:'justify',
        marginHorizontal:20
    },
    mentor:{
        height:180,
        width:180,
        borderWidth:4,
        borderColor:'#00BCD5',
        borderRadius:100,
        marginTop:15
    }
});

export default About;