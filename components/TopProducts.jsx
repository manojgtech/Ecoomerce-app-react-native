import React, { useEffect, useState }  from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
 FlatList,
 ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-material-ui';
const TopProducts = ({topproducts}) => {
    
    const navigation = useNavigation();
const renderItem = ({ item }) => (
    <Item title={item.name}   image={item.images.length ? item.images[0].src: ''} price={item.price} rprice={item.regular_price} id={item.id} />
  );

  const myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
      <Text style={styles.item}>No data found</Text>
      </View>
    );
  };

  const myItemSeparator = () => {
    return <View style={{ height: 1, backgroundColor: "grey",marginHorizontal:10}} />;
    };

    const Item = ({ title,image,price,rprice,id }) => (
        <View style={styles.listview}>
          <View style={{width:120}}>
            {image && <TouchableOpacity onPress={()=>onPressLearnMore1(id)}><Image source={{uri:image}}
          style={styles.pimg}
          /></TouchableOpacity>}
          
          </View>
          <View style={styles.ptext}>
          <Text style={{color:'black',fontWeight:'bold',fontSize:20,marginBottom:5}} onPress={()=>onPressLearnMore1(id)}>{title} </Text>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
          <Text style={{color:'red',fontSize:15,fontWeight:600}}> Price  </Text>
          <Text style={{textDecorationLine: 'line-through',color:'black', textDecorationStyle: 'solid'}}>{rprice}  </Text>
          <Text style={{color:'red'}}> {price}  </Text>
          </View>
          
         
          <Button onPress={()=>onPressLearnMore()}
    raised primary text="Add to Card"
     />
          </View>
        </View>
      );
      const onPressLearnMore1=(id)=>{
        navigation.navigate("Product",{itemId:id,other:'hello'});
      }
  
    return (
        <View style={{textAlign:'center',justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'black',fontSize:30,marginTop:20,justifyContent:'center',textAlign:'center',fontWeight:600}}>Featured Products</Text>
             <FlatList
        data={topproducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={myItemSeparator}
        ListEmptyComponent={myListEmpty}
        numColumns={2}
      />
    </View>
    );
}

const styles = StyleSheet.create({listview:{backgroundColor:'white',justifyContent:'center',alignItems:'center', padding:5,width:180,display:'flex',flexDirection:'column',margin:3,borderRadius:20,padding:4},
pimg:{backgroundColor:'black',width:100,height:100},
})

export default TopProducts;
