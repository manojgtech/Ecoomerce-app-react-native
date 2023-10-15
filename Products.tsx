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
  View,
  TouchableOpacity,
  Image,
  TextInput,
 FlatList,
 Card,
 ActivityIndicator

} from 'react-native';
import Carousel from 'react-native-snap-carousel';

function Products({navigation}): JSX.Element {
   
    const [products,setProducts]=useState([{id:1}]);
    const [load,setLoad]=useState(false);
    useEffect(()=>{
      setLoad(true);
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{setProducts(json)});
            setLoad(false)
     });
     
     const Item = ({ title,image,price,id }) => (
      <View style={styles.listview}>
        <View style={{width:120}}>
          {image && <Image source={{uri:image}}
        style={styles.pimg}
        />}
        
        </View>
        <View style={styles.ptext}>
        <Text style={{color:'black',fontWeight:'bold',fontSize:20}} onPress={()=>onPressLearnMore1(id)}>{title} </Text>
        <Text style={{color:'red',marginTop:10}}>{id} Rs </Text>
        <Button onPress={()=>onPressLearnMore()}
  title="Add To Cart"
  color="#841584"
  
  accessibilityLabel="Buy now" />
  <Button onPress={()=>onPressLearnMore1(id)}
  title="Details"
  color="black"
  accessibilityLabel="Buy now" />
        </View>
      </View>
    );

    // item grid

    const Item1 = ({ title,image,price,id }) => (
      <View style={styles.listview1}>
        <View style={{width:120}}>
          {image && <Image source={{uri:image}}
        style={styles.pimg}
        />}
        
        </View>
        <View style={styles.ptext}>
        <Text style={{color:'black',fontWeight:'bold',fontSize:20}} onPress={()=>onPressLearnMore1(id)}>{title} </Text>
        <Text style={{color:'red',marginTop:10}}>{id} Rs </Text>
        <Button onPress={()=>onPressLearnMore()}
  title="Add To Cart"
  color="#841584"
  
  accessibilityLabel="Buy now" />
  <Button onPress={()=>onPressLearnMore1(id)}
  title="Details"
  color="black"
  accessibilityLabel="Buy now" />
        </View>
      </View>
    );


    const onPressLearnMore=()=>{

    }

    const onPressLearnMore1=(id)=>{
      navigation.navigate("Product",{itemId:id,other:'hello'});
    }

    const myItemSeparator = () => {
      return <View style={{ height: 1, backgroundColor: "grey",marginHorizontal:10}} />;
      };
    
    const myListEmpty = () => {
      return (
        <View style={{ alignItems: "center" }}>
        <Text style={styles.item}>No data found</Text>
        </View>
      );
    };
    
    const renderItem = ({ item }) => (
      <Item title={item.title}  image={item.image} price={item.price} id={item.id} />
    );
    const renderItem1 = ({ item }) => (
      <Item1 title={item.title}  image={item.image} price={item.price} id={item.id} />
    );
 return(
  <View>
    <Text style={{color:'black',fontSize:30,textAlign:'center'}}>Featured Product</Text>
    {load && <ActivityIndicator size="large" color="black" />}
    <Carousel
              ref={(c) => { this._carousel = c; }}
              data={products}
              renderItem={renderItem}
              sliderWidth={400}
              itemWidth={260}
              layoutCardOffset={`18`}
            />
            <Text style={{color:'black',fontSize:30,textAlign:'center',marginTop:20}}>Recommended Products</Text>
    <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={myItemSeparator}
        ListEmptyComponent={myListEmpty}
        // ListHeaderComponent={() => (
        //   <Text style={{ fontSize: 15, color:'black', textAlign: "center",marginTop:20,fontWeight:'bold',textDecorationLine: 'underline' }}>
        //     Featured products ({products.length})
        //   </Text>
        // )}
        ListFooterComponent={() => (
          <Text style={{  fontSize: 15, color:'black', textAlign: "center",marginBottom:20,fontWeight:'bold' }}>Load more..</Text>
        )}
        numColumns={2}
        
      />
  </View>

  
       
       
 );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    listview:{backgroundColor:'white',justifyContent:'center',alignItems:'center', padding:5,width:180,display:'flex',flexDirection:'column',margin:3,borderRadius:20,padding:4},
    pimg:{backgroundColor:'black',width:100,height:100},
    ptext:{
      display:'flex',
      flexDirection:'column',
      flexWrap:'wrap',
      justifyContent:'center',
      alignItems:'flex-start'
    },
    listview1:{backgroundColor:'white',justifyContent:'flex-start',padding:5,width:250,display:'flex',flexDirection:'row',margin:3,borderRadius:20,padding:4},
    pimg:{backgroundColor:'black',width:100,height:100},
    ptext:{
      display:'flex',
      flexDirection:'column',
      flexWrap:'wrap',
      justifyContent:'center',
      alignItems:'flex-start'
    }
  });

export default Products;

