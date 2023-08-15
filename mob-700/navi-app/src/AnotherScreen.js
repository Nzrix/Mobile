import { View ,Text ,Button , StyleSheet } from "react-native";


const AnotherScreen = ({ route,navigation}) => {
    const {id,message} = route.params;
    return(
      <View style = {[styles.container , {backgroundColor : "#edaa25" }]}>
        <Text style = {styles.title}>AnotherScreen</Text>
        <Button 
          title ="Back to Home" 
          color = "#c43302"
          onPress = {() => navigation.goBack()}  
        />
        <Text style = {[styles.title,{marginTop : 10 , fontSize : 18}]}> {id}</Text>
        <Text style = {[styles.title,{marginBottom : 10 , fontSize : 24}]}> {message}</Text>
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
  });
  
  export default AnotherScreen ;