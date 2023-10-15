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
 FlatList,
 Card

} from 'react-native';

function Product({ route, navigation }): JSX.Element {
const itemId  =route.params.itemId;
const [product,setProduct]=useState({});
useEffect(()=>{
    fetch('https://fakestoreapi.com/products/'+itemId)
        .then(res=>res.json())
        .then(json=>{setProduct(json)});
 });

 return(
  <SafeAreaView>
    <ScrollView>
        <View style={{flex:1,backgroundColor:'pink'}}>
         <Text style={{fontWeight:400,fontSize:30,alignSelf: 'center',}}>{product.title}</Text>
         {product.image && <Image source={{uri:product.image}} style={{width:250,height:180,alignSelf:'center',marginTop:20}} />}
         <Text style={{color:'black',fontSize:30 ,textAlign:'center',fontWeight:300}}>Price:{product.price}</Text>
         <Text style={{color:'black',fontSize:20 ,textAlign:'center',fontWeight:300}}>Category:{product.category}</Text>
         <Text style={{color:'black',padding:5}}>{product.description}</Text>
        </View>
    </ScrollView>
  </SafeAreaView>
 );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        
    }
    
  });

export default Product;

