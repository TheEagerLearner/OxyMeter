import React,{useState,useEffect} from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';
import oxygen from "../axios/oxygen";




const Home = () => {

    const [oxy,setOxygen] = useState(null);

    async function getTime(){
        try{
            const respose = await oxygen.get();
            const oxygen_value = respose.data.feeds[0].field1;
            
            setOxygen(oxygen_value);
        }
        catch(err){
    
            console.log(err);
        }

  }

  setInterval(getTime,1000);
  
    
    return(
        <View style={stylesheet.container}>
            <Text style={stylesheet.heading}>Oxygen is</Text>
            <View>{oxy?<Text style={stylesheet.subheading}>{oxy}%</Text>:<Image 
                style={{
                    width:100,
                    height:100,
                        }} 
                source={require('./../img/hindu.png')}/>}</View>

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
        fontSize:32
    },
    subheading:{
        fontSize:72
    }

});

export default Home;