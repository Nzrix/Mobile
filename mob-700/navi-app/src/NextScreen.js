import { View ,Text  , StyleSheet, TextInput , TouchableOpacity, Alert} from "react-native";
import { useState } from "react";
import MyButton from "./components/Mybutton";
import Myinput from "./components/Myinput";

const NextScreen = () => {
    const [message , setMessage] = useState ("");
    const [subject , setSubject] = useState ("");
    return(
      <View style = {styles.container}>
        <Text>Next Screen</Text>
        <View style = {styles.inputContainer}>
            <TextInput 
            placeholder="Type something...." a
            style ={styles.input}
            value = {message}
            onChangeText = {(text) => setMessage(text)}
            />
        </View>

        {/* <TouchableOpacity style = {[styles.button ,]} 
        onPress = {()=>Alert.alert('Submitted',`You entered "${message}"`)}>
            <Text style = {styles.text}>Submit</Text>
        </TouchableOpacity> */}
        <MyButton
            title="Submit"
            onPress = {()=>Alert.alert('Submitted',`You entered "${message}"`)}
        />
        <MyButton title="Reset" color='#F52D00' onPress = {()=> setMessage("")} />
        <Myinput
            placeholder = "Type Something Again..."
            value={subject}
            onChangeText={(text) => setSubject}/>
        <MyButton title="Drop" color='#B90DFC' onPress = {()=> setMessage("")}/>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b7bf99',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    title : {
      fontSize : 16 ,
      fontWeight : "bold",
    },
    input :{
        fontSize :16,
    },
    inputContainer : {
        borderWidth : 1 ,
        borderColor : "#ccc" ,
        borderRadius : 8 ,
        paddingHorizontal : 10 ,
        paddingVertical : 5 ,
        marginBottom : 10 ,
    },
    button :{
        borderRadius : 8 ,
        padding : 12,
        justifyContent : 'center' ,
        alignItems : 'center' ,
        marginVertical : 10 ,
        
    },
    text : {
        color : "fff" ,
        fontSize : 18,
    }
  });
  
  export default NextScreen ;