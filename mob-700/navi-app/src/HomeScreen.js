import { View ,Text  , StyleSheet, TextInput , TouchableOpacity, Alert, FlatList} from "react-native";
import MyButton from "./components/Mybutton";
import itemList from "./data/itemList.json";
import RenderItem from "./components/RenderItem";

const HomeScreen = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text>Home Screen</Text>
            <MyButton title='Next>>' onPress={()=> navigation.navigate("Next")}/>
            <FlatList
                data ={itemList}
                keyExtractor ={(item) => <RenderItem item={item}/>}
                renderItem ={({item}) => <RenderItem item={item}/>}
            />
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
});

export default HomeScreen;