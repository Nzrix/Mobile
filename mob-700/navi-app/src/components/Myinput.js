import { View ,Text  , StyleSheet ,TextInput} from "react-native";

const Myinput =({title})=>{
    return (
        <View style = {styles.inputContainer}>
          <TextInput 
            placeholder="Type something...." 
            style ={styles.input}
            // value = {message}
            // onChangeText = {(text) => setMessage(text)}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    button :{
        borderRadius : 8 ,
        padding : 12,
        justifyContent : 'center' ,
        alignItems : 'center' ,
        marginVertical : 10 ,
        backgroundColor : "#ff5a33" ,
    },
    text : {
        color : "fff" ,
        fontSize : 18,
    },
    inputContainer : {
        borderWidth : 1 ,
        borderColor : "#ccc" ,
        borderRadius : 8 ,
        paddingHorizontal : 10 ,
        paddingVertical : 5 ,
        marginBottom : 10 ,
    },
});


export default Myinput;