import { View ,Text  , StyleSheet , TouchableOpacity , Alert} from "react-native";

const MyButton =({title , color = "#2BFF53", message})=>{
    return (
        <View>
         <TouchableOpacity style = {[styles.button , {backgroundColor: color}]} 
        onPress = {()=>Alert.alert('Submitted',`You entered "${message}"`)}
        >
            <Text style = {styles.text}>{title}</Text>
        </TouchableOpacity>
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
    }
});


export default MyButton;