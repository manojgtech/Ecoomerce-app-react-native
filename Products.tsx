import React, { useEffect, useState }  from 'react';
import type {PropsWithChildren} from 'react';
import {
  
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
 ActivityIndicator

} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';
import Header from './components/Header';
import Searchbox from './components/Searchbox';
import TopProducts from './components/TopProducts';
import { Card } from 'react-native-material-ui';
function Products({navigation}): JSX.Element {
   
    const [products,setProducts]=useState([]);
    const [cats,setCats]=useState([]);
    const [load,setLoad]=useState(false);
    const [cload,setCLoad]=useState(false);
    useEffect(()=>{
      setLoad(true);
      setCLoad(true);
         loadProducts();
         loadCats();
     });

     const loadProducts=()=>{
                var myHeaders = new Headers();
          myHeaders.append("Authorization", "Basic Y2tfNmI3ZDU2ZjVlMjU0OGU5YjA5NzdmZTQzMjU1Y2EyODRlYjVlYzdkNTpjc184MjcyZDAwODk0NTU1ZjUzNmQzZTY4MDMwMmIxYjNkOTYyYzEwOGM5");
          var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
          fetch("https://skb.bharatdigitalmarketing.com/wp-json/wc/v3/products", requestOptions)
            .then(response => response.json())
            .then(result => {  setProducts(result); setLoad(false)})
            .catch(error => console.log('error', error));
     }
     const loadCats=()=>{
      var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic Y2tfNmI3ZDU2ZjVlMjU0OGU5YjA5NzdmZTQzMjU1Y2EyODRlYjVlYzdkNTpjc184MjcyZDAwODk0NTU1ZjUzNmQzZTY4MDMwMmIxYjNkOTYyYzEwOGM5");
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
fetch("https://skb.bharatdigitalmarketing.com/wp-json/wc/v3/products/categories", requestOptions)
  .then(response => response.json())
  .then(result => {setCats(result); setCLoad(false)})
  .catch(error => console.log('error', error));
}

    // item grid
    const Item1 = ({ title,image,id }) => (
      <Card style={{borderRadius:20,margin:10,backgroundColor:'black',height:200}}>
      
        <View style={{height:160}}>
           <Image source={{uri:image}}
           style={{height:150}}
        />
        </View>
        <Card style={styles.ptext}>
        <Text style={{color:'black',fontWeight:'bold',fontSize:20,textAlign:'center'}} onPress={()=>onPressLearnMore1(id)}>{title} </Text>
        </Card>
      </Card>
    );


    const onPressLearnMore1=(id)=>{
      navigation.navigate("Product",{itemId:id,other:'hello'});
    }

    const renderItem1 = ({ item }) => (
      <Item1 title={item.name}  image={item.image.src}  id={item.id} />
    );
 return(
   <SafeAreaView>
        <ScrollView>
          <Header />
          <Searchbox />
          <View style={{marginTop:10,backgroundColor:'red'}}><Text style={{color:'black'}}>Pin code:203405</Text></View>
          <View style={{marginTop:2}}>
  <Image source={{uri:'https://indiater.com/wp-content/uploads/2019/10/Biggest-Diwali-Festival-Sale-offer.jpg'}} style={{height:200}} />
</View>
<View style={{marginTop:10,backgroundColor:'white'}}>
              <Text style={{color:'black',fontSize:30,marginTop:20,justifyContent:'center',textAlign:'center',fontWeight:'bold'}}>Top Categories</Text>
           {(load && cats.length==0) ? < ActivityIndicator size="large" />: <Carousel
              ref={(c) => { this._carousel = c; }}
              data={cats}
              renderItem={renderItem1}
              sliderWidth={440}
              itemWidth={220}
              layout={'default'}
              
              
            />}
            </View>
            {(load && products.length==0) ? <ActivityIndicator size="large" />:<TopProducts topproducts={products} /> }
            
        </ScrollView>
   </SafeAreaView>
 );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    listview:{backgroundColor:'white',justifyContent:'center',alignItems:'center', padding:5,width:180,display:'flex',flexDirection:'column',margin:3,borderRadius:20,padding:4},
    pimg:{backgroundColor:'black',width:100,height:100},
    
    listview1:{justifyContent:'center',padding:5,width:150,display:'flex',flexDirection:'row',margin:3,borderRadius:20,padding:10,marginBottom:50,backgroundColor:'transparent'},
    pimg:{backgroundColor:'black',width:100,height:100},
    pimg1:{backgroundColor:'black',height:120},
    ptext:{
      display:'flex',
      flexDirection:'column',
      flexWrap:'wrap',
      justifyContent:'center',
      alignItems:'center',
      paddingLeft:4,
      textAlign:'center'
    
    }
  });

export default Products;

