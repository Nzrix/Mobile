import { View , Text , StyleSheet} from 'react-native' 

const RenderItem = ({item}) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>
            {item.id} : {item.title}
            </Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding : 15,
        borderBottomWidth : 1,
        borderBottomColor : "#f25caf",
      },
      title : {
        fontSize : 16 ,
        fontWeight : "bold",
      },
      description : {
        fontSize : 14,
        marginTop : 5 ,
      },

});

export default RenderItem;