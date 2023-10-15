import React, { useEffect }  from 'react';
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
  Image

} from 'react-native';

function Home({navigation}): JSX.Element {
    useEffect(()=>{
       setTimeout(()=>{
            navigation.navigate("BottomTab");
       },2000)
    });
 return(
    <SafeAreaView>
        <ScrollView>
            <View style={{flex:1}}>
                <View style={{alignSelf:'center',backgroundColor:'red',marginTop:150}}>
                <Text style={{fontSize:50,fontWeight:'bold'}}>Rapid Shop</Text>
                
                </View>
                <Image source={require('./img/logo1.png')}  style={{width: 140, alignSelf:'center',marginTop:10}}/>
            </View>
        </ScrollView>
    </SafeAreaView>
 );
}


export default Home;

