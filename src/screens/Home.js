import React,{useState} from 'react';
import {View,StyleSheet,Text,Image,ToastAndroid} from 'react-native';
import oxygen from "../axios/oxygen";


var count = 0;




const Home = () => {


    const [oxy,setOxygen] = useState(null);

    //Asynchronous function to GET data from the provided API
    async function getOxygen(){
        try{
            const respose = await oxygen.get();
            let oxygen_value = respose.data.feeds[0].field1;
            count = 0;
            setOxygen(oxygen_value);
        }
        catch(err){
            if(count===0){

                ToastAndroid.show("Something unexpected has occured! \nPlease check your Internet Connection",4000);
                count = 1;
            }
            
            console.log(err);
            
        }

  }

  //value is set over here
  setInterval(getOxygen,1000);
  
    
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