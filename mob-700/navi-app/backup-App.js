import { StyleSheet, 
  Text, 
  View,
  Button, 
  TextInput, 
  Image,
  TouchableOpacity ,
  Alert ,
  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnotherScreen from './src/AnotherScreen';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';


const HomeScreen = ({navigation}) => {
  const [msg , setMSG]= useState("");
  return(
    
    <View style = {styles.container}>
      
      <Text style = {[styles.title, {fontSize : 24}]}>Home Screen</Text>
      <TextInput style = {{
        fontSize : 18,
        padding : 20,
        borderWidth : 1,
        borderRadius : 10 ,
        borderColor : "c43302",
        margin : 10 ,
        backgroundColor : "#edaa25",
        width : "80%",
      }} 
      placeholder='Type Message Here'
      keyboardType='twitter'
      multiline
      numberOfLines={5}
      textAlignVertical = "top"
      value = {msg}
      onChangeText={(text) => setMSG(text)}
      />
      <Button 
        title ="Another World" 
        color = "#c43302"
        onPress = {() => navigation.navigate("Another",{
          message : msg
        })}  
      />
      <Button 
        title ="Change a Title" 
        color = "#c43302"
        onPress = {() => navigation.setOptions({ headerTitle : msg})}  
      />
    </View>
  );
};



const Stack = createNativeStackNavigator();

const App = () => {
  //Main Boby
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName = "Home" screenOptions={{
          hearderTitleStyle : {
            fontSize : 25 ,
            fontWeight : "bold"
          },
          headerStyle : {
            backgroundColor : "#007172",
          },
          headerTitleAlign : "center",
          hearderTintColor : "#f4e2de",
        }}>
        <Stack.Screen name =  "Home" 
        component = {HomeScreen} 
        options={{
          headerTitle : 'หน้าแรก',
          headerStyle : {
          backgroundColor : "#007172",
          },
          headerTintColor : "#f4e2de",
        }}
        />
        <Stack.Screen name =  "Another" 
        component = {AnotherScreen}
        options = {{
          headerTitle : ()=> (
            <TouchableOpacity  onPress={() => Alert.alert("ด้อมเกษตร")}>
              <Image style={{width:50 , height:50}} source={require("./src/img/logo-ku.png")} />
            </TouchableOpacity>
          ),
          headerRight : ()=> (
            <TouchableOpacity onPress = {()=> Alert.alert ("ผู้จัดทำ : ปวริศ ")}> 
            <AntDesign name="caretdown" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
});

export default App ;