import {
    View, 
    Text,
    StyleSheet,
    Button,
    } from 'react-native';
    import {NavigationContainer, StackActions } from '@react-navigation/native';
    import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
    import { AntDesign } from '@expo/vector-icons';
    import { createNativeStackNavigator } from '@react-navigation/native-stack';
    import NextScreen from './src/NextScreen';
    import HomeScreen from './src/HomeScreen';

    // const HomeScreen = ({navigation}) => {
    //     return (
    //         <View style = {styles.container}>
    //             <Text>Home Screen</Text>
    //             <Button title='Next>>' onPress={()=> navigation.navigate("Next")} />
    //         </View>
    //     );
    // }
    // const NextScreen = () => {
    //     return (
    //         <View style = {styles.container}>
    //             <Text>Next Screen</Text>
    //         </View>
    //     );
    // }

    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    
    const HomeStackScreen = () => {
        return (
            <StackActions>
                <Stack.Screen name = "Home" component = {HomeScreen}/>
                <Stack.Screen name = "Next" component={NextScreen}/>
            </StackActions>
            )
    }


    const App = () => {
        return (
           <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarStyle : {
                    backgroundColor :"#EdAA25"
                },
                tabBarActiveTintColor :"c43302",
                headerStyle :{
                    backgroundColor : "#0a7373"
                },
                headerTintColor : "#fff",
                headerShown : "false",
            }}
            >
                <Tab.Screen 
                name='Home' 
                component={HomeScreen}
                options={{
                    tabBarIcon : ({ color , size}) => (
                        <AntDesign name="home" size={size} color={color} />
                    ),
                }}/>
                
                <Tab.Screen 
                name='Next' 
                component={NextScreen}
                options={{
                    tabBarIcon : ({ color , size}) => (
                        <AntDesign name="caretright" size={size} color={color} />
                    ),
                    tabBarBadge : 999,
                }}/>
            
            </Tab.Navigator>
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
    });
    
    export default App ;