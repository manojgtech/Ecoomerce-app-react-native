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
  ActivityIndicator,
  TextInput,
 FlatList,
 Card

} from 'react-native';
import HTMLView from 'react-native-htmlview';
import Carousel from 'react-native-snap-carousel';

function Product({ route, navigation }): JSX.Element {
const itemId  =route.params.itemId;
const [product,setProduct]=useState({});
useEffect(()=>{
  loadProducts(itemId);
 });
 const loadProducts=(id)=>{
  console.log(id);
  var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic Y2tfNmI3ZDU2ZjVlMjU0OGU5YjA5NzdmZTQzMjU1Y2EyODRlYjVlYzdkNTpjc184MjcyZDAwODk0NTU1ZjUzNmQzZTY4MDMwMmIxYjNkOTYyYzEwOGM5");
var requestOptions = {
method: 'GET',
headers: myHeaders,
redirect: 'follow'
};
fetch("https://skb.bharatdigitalmarketing.com/wp-json/wc/v3/products/"+id, requestOptions)
.then(response => response.json())
.then(result => {  setProduct(result);})
.catch(error => console.log('error', error));
}
const Item1 = ({ image }) => (
  <View style={{backgroundColor:'black',height:200,borderWidth:1,borderColor:'black',}}>
       <Image source={{uri:image}}
       style={{height:150}}
    />
  </View>
);

const renderItem1 = ({ item }) =>{
  console.log(item,"it");
  return(<Item1  image={item.src}   />);
}

 return(
  <SafeAreaView>
    <ScrollView>
        {Object.keys(product).length ? <View style={{flex:1,backgroundColor:'pink'}}>
         <Text style={{fontWeight:400,fontSize:30,alignSelf: 'center',}}>{product.name}</Text>
         {/* {product.images[0] && <Image source={{uri:product.images[0].src}} style={{height:180,alignSelf:'center',marginTop:20}} />} */}
         {product.images && <Carousel
              ref={(c) => { this._carousel = c; }}
              data={product.images}
              renderItem={renderItem1}
              sliderWidth={440}
              itemWidth={440}
              layout={'default'}
              
            />}
         <Text style={{color:'black',fontSize:30 ,textAlign:'center',fontWeight:300}}>Price:{product.name}</Text>
         {/* <Text style={{color:'black',fontSize:20 ,textAlign:'center',fontWeight:300}}>Category:{product.category}</Text> */}
        
         <HTMLView
        value={product.description}
        stylesheet={styles}
      />
        </View>: <ActivityIndicator size="large" />}
    </ScrollView>
  </SafeAreaView>
 );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    dec:{
      margin:20,
      color:'black',
      margin:2
      
    },
    p:{
      color:'black'
    }
    
  });

export default Product;

