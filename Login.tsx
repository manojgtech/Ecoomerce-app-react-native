import React, { useEffect, useState }  from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,TouchableOpacity,
  Image,
  TextInput,
  Alert

} from 'react-native';

function Login({navigation}): JSX.Element {
    const [email,setemail]=useState("")
    const [pass,setpass]=useState("")
    useEffect(()=>{
       setTimeout(()=>{
            
       },5000)
    });

    const showalert=(title,msg)=>{
        Alert.alert(  
            title,  
            msg,  
            [  
                {  
                    text: 'Cancel',  
                    onPress: () => console.log('Cancel Pressed'),  
                    style: 'cancel',  
                },  
                {text: 'OK', onPress: () => console.log('OK Pressed')},  
            ]  
        ); 
    }

    const onPressLogin = () => {
        navigation.navigate("BottomTab");
        return false;
        if(email==""){
            showalert("Alert","Email is required");
        }
        if(pass.length<6){
            showalert("Alert","Password is required");
        }
        if(email!="" && pass.length>=6){
            fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  
                  username: email,
                  password: pass,
                  // expiresInMins: 60, // optional
                })
              })
              .then(res => res.json())
              .then(json=>{
                showalert("Success","Looged in");
                
              });
        }
    
        
        };
        const onPressForgotPassword = () => {
        // Do something about forgot password operation
        };
        const onPressSignUp = () => {
        // Do something about signup operation
        };
 return(
    <SafeAreaView>
        <ScrollView>
            <View style={{flex:1}}>
                <View style={{alignSelf:'center',marginTop:100}}>
                <Text style={{fontSize:50,fontWeight:'bold',color:'black'}}>Login</Text>
                
                </View>
                <View style={{marginTop:58,justifyContent:'center',alignItems:'center'}}>
                    <View style={styles.inputView}>
                        <TextInput placeholder='Email' onChangeText={(text)=>setemail(text)} placeholderTextColor="red" style={styles.inputText} />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput placeholder='Password' onChangeText={(text)=>setpass(text)} secureTextEntry placeholderTextColor="red" style={styles.inputText} />
                    </View>
                    <TouchableOpacity
onPress = {onPressLogin}
style={styles.loginBtn}>
<Text style={styles.loginText}>LOGIN </Text>
</TouchableOpacity>
                    <TouchableOpacity
onPress = {onPressForgotPassword} style={styles.forgotAndSignUpText}>
<Text>Forgot Password?</Text>
</TouchableOpacity>

<TouchableOpacity
onPress = {onPressSignUp} style={styles.forgotAndSignUpText}>
<Text>Signup</Text>
</TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
 );
}
const styles = StyleSheet.create({
    inputView:{
        width:280,
        backgroundColor:"#3AB4BA",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
        },
        inputText:{
        height:50,
        color:"white"
        },
        forgotAndSignUpText:{
            width:"80%",
            backgroundColor:"#eb3b4a",
            borderRadius:25,
            height:50,
            alignItems:"center",
            justifyContent:"center",
            marginTop:10,
            marginBottom:2
            },

            loginBtn:{
            width:"80%",
            backgroundColor:"#fb5b5a",
            borderRadius:25,
            height:50,
            alignItems:"center",
            justifyContent:"center",
            marginTop:10,
            marginBottom:2
            },
  });

export default Login;

