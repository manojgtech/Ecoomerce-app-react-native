import React,{useState,useEffect} from 'react';
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
import { useRoute } from '@react-navigation/native';
import { Card } from 'react-native-material-ui';
const FilterProducts = () => {
    const route = useRoute();
    const search=route.params.search.trim();
    const [products, setproducts] = useState([]);
    const [loads, setloads] = useState(false);
     useEffect(() => {
        console.log(search,'serch')
        setloads(true);
        loadCats();
     });

    const loadCats=()=>{
        setloads(true);
        var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic Y2tfNmI3ZDU2ZjVlMjU0OGU5YjA5NzdmZTQzMjU1Y2EyODRlYjVlYzdkNTpjc184MjcyZDAwODk0NTU1ZjUzNmQzZTY4MDMwMmIxYjNkOTYyYzEwOGM5");
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  console.log("https://skb.bharatdigitalmarketing.com/wp-json/wc/v3/products?q="+search);
  fetch("https://skb.bharatdigitalmarketing.com/wp-json/wc/v3/products?q="+search, requestOptions)
    .then(response => response.json())
    .then(result => {setproducts(result);console.log(result);setloads(false)})
    .catch(error => console.log('error', error));
  }

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
        <Card>
         <Text style={{color:'black'}}>{title}</Text>
        </Card>
      );
      const onPressLearnMore1=(id)=>{
        navigation.navigate("Product",{itemId:id,other:'hello'});
      }
    return (
        <SafeAreaView>
        <ScrollView>
            <View style={{backgroundColor:'green',display:'flex',flex:1}}>
            <Text style={{color:'black',fontSize:20,fontWeight:600}}>Search Results for ::{search}</Text>
            {loads && <ActivityIndicator size="large" /> }
            <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={myItemSeparator}
        ListEmptyComponent={myListEmpty}
        numColumns={1}
      />
            </View>
        </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default FilterProducts;
