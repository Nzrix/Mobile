import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
   StyleSheet, 
   Text, 
   View , 
   Image, 
   ScrollView, 
   TextInput, 
   Button, 
   TouchableOpacity,
   ActivityIndicator,
   FlatList,
   Alert,
   SectionList,
  } from 'react-native';

  const flatListData = [
    { id: "cs01", name: "123"},
    { id: "cs02", name: "456"},
    { id: "cs03", name: "789"},
    { id: "cs04", name: "0123"},
  ];

  const sectionListData =[
    {title: "A",data: ["AA","123"]},
    {title: "B",data: ["BB","456"]},
    {title: "C",data: ["CC","789"]},
    {title: "D",data: ["DD","0123"]},
  ]

export default function App() {
  const [num, setNum] = useState(0);
  const [isloading , setIsLoading]= useState(false)

  return (
    <View style = {mystyles.section}>
      <Text style = {mystyles.title}>Lists :</Text>
      <FlatList
        data = {flatListData}
        renderItem = {({item})=> (
          <TouchableOpacity 
            onPress ={() => Alert.alert("Alert","Hellow " +item.name)}
          >
            
            <View
              style = {{
                backgroundColor : "#f7ede2",
                padding : 7, 
                borderWidth : 1,
                borderColor : "#999",
                borderRadius : 5,
                marginBottom : 3 ,
              
              }}
              >
              <Text style = {{color: "#999"}}>[{item.id}]</Text>
              <Text style = {{fontSize: 18 }}>{item.name}</Text>
            
            </View>
          </TouchableOpacity>
        )}
      />
      <Text style = {mystyles.title}>SectionLists :</Text>
      <SectionList
        sections = {sectionListData}
        renderItem = {({section , item})=> (
          <View
            style = {{
              backgroundColor : "#6594c0",
              padding : 8, 
              borderBottomWidth : 1,
              borderBottomColor : "#0e1e5b",
              borderRightWidth: 1,
              borderRightColor: "#0e1e5b" ,
              elevation : 5,
            
            }}
          >
            <Text style = {{fontSize : 16, color : "#091442"}}> {item} </Text>
          </View>
        )}
        renderSectionHeader = {({section})=> (
          
          <Text style = {{ fontSize : 20 }} > {section.title} </Text>
          
        )}
      />
      </View>
    // <ScrollView style = {mystyles.container}>
      
    //   <View style = {mystyles.section}>
    //   <Text style = {mystyles.title}>isLoading</Text>
    //   <Button 
    //     title = "Toggle"
    //     color= "green"
    //     onPress={() => {
    //       setIsLoading(!isloading);
    //     }}/>
    //   {isloading ? <ActivityIndicator size="large"/>  : null}
      
    //   </View>
    //   <View style = {mystyles.section}>
    //   <Text style = {mystyles.title}>Button :{num}</Text>
    //   <View style = {mystyles.section}>
    //   <Button 
    //     title= 'ADD' 
    //     color={'red'} 
    //     onPress={() => {
    //       num == 999 ? null :setNum (num + 1);

    //       }} /></View>
    //   <View style = {mystyles.section}>
    //   <Button 
    //     title= 'DEL' 
    //     color={'red'} 
    //     onPress={() => {
    //       num == 0 ? null : setNum (num - 1);

    //       }} /></View>
    //   <View style = {mystyles.section}>
    //   <Button 
    //     title= 'Set Zero' 
    //     color={'red'} 
    //     onPress={() => {
    //       setNum (0);

    //       }} /></View>
    //   {/* <Text style = {mystyles.bottom}>Button :</Text> */}
    // </View>
    // <View style = {{alignItems: "center"}}>
    //   <TouchableOpacity
    //     onPress={() => {
    //       setNum(num + 10)
    //     }}>
    //   <Text style = {{
    //     borderWidth : 1,
    //     width : 150 ,
    //     textAlign : "center",
    //     borderColor : "#ddd",
    //     padding : 10 ,
    //     fontSize : 16  ,
    //     backgroundColor : 'green',
    //     }}>Power Up </Text></TouchableOpacity>
    // </View>
    // <View style = {mystyles.section}>
    //   <Text style = {mystyles.title}>TextInput :</Text>
    //   <TextInput style = {mystyles.input} placeholder='Name - Lastname'/>
    // </View>
    // <View style = {mystyles.section}>
    //   <Text style = {mystyles.title}>Image (uri) :</Text>
    //   <TouchableOpacity
    //     onPress={() => {
    //       setNum(999)
    //     }}>
    //     <Image source={
    //     {uri :"https://kbimages1-a.akamaihd.net/04246342-c371-44bb-bce7-2186e719a06b/1200/1200/False/the-ball-python.jpg" }}
    //     style = {mystyles.image}
    //     /></TouchableOpacity>
    // </View>
    // <View>
    //   <Text style = {mystyles.title}>Image (local) :</Text>
    //   <Image 
    //     source={ require('./src/img/2.jpg') }
    //     style = {mystyles.image}

    //   />

    // </View>
    // <View style = {mystyles.section}>
    //   <Text style = {mystyles.title}>Text :</Text>
    //   <Text style = {{fontSize: 18}}>
    //       Open up App.js to start working on your app!
    //   </Text>
    //   <StatusBar style="auto" />
    // </View>
    // </ScrollView>
  );
}

const mystyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding : 20 ,
   // alignItems: 'center',
   // justifyContent: 'center',
  },
  title : {
    fontSize : 20 ,
    marginBottom : 10 ,
    alignSelf : 'center',
    marginTop : 15 ,
    // padding : 20 ,

  }, 

  image : {
    width : 150, 
    height : 200,
    alignSelf : 'center',
    marginBottom :20,
  },
  section: {
    marginBottom : 20 ,
  },
  input :{
    borderWidth: 2,
    borderColor : "#bebebe",
    height : 40 ,
    paddingLeft : 20 ,

  },
});