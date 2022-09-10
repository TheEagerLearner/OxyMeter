import React,{useState} from 'react';
import {View,StyleSheet,Text,Image,ToastAndroid,TouchableOpacity} from 'react-native';
import oxygen from "../axios/oxygen";
import Circle from '../components/Circle';
import { AntDesign } from '@expo/vector-icons';


var count = 0;




const Home = ({navigation}) => {


    const [oxy,setOxygen] = useState(0);

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

            
            <Image 
                style={stylesheet.background_image}
                source={require('./../img/home.png')}    
            />
        
            <Circle 
                data={oxy}
            />
            <Text
                style={stylesheet.textheading}
            >Oxygen puurity</Text>

            <TouchableOpacity
                style={stylesheet.about_btn}
                onPress={()=>{
                    navigation.navigate('About');
                }}
            >
                <AntDesign name="infocirlce" size={30} color="#00BCD5" />
            </TouchableOpacity>
            
 
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
    },
    background_image:{
        position:'absolute',
        height:'100%',
        width:'100%'
    },
    about_btn:{
        position:'absolute',
        right:20,
        top:50

    },
    textheading:{
        fontSize:42,
        fontWeight:'bold',
        position:'absolute',
        paddingTop:100
        
    }

});

export default Home;