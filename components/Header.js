import React from 'react';
import {View,Text, StyleSheet,TouchableOpacity,Image,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Header = () => {
    return (
        <View style={styles.header}>
            <Icon name="user" size={40} color="#900" />
            <View style={styles.user}>
                <View><Text style={{color:'black',fontSize:15,fontWeight:'bold'}}>Name</Text></View>
              <View style={{display:'flex',flexDirection:'row',backgroundColor:'red',borderRadius:20,justifyContent:'center'}}><Text>5</Text><Icon name="star" style={{marginLeft:5}} size={20} color="#900" /></View>
            </View>
            <View style={{marginLeft:170,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <Icon name="heart" size={30} color="red" />
            <Icon name="bell" size={30} color="red" />
            <Icon name="shopping-cart" size={30} color="red" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  header:{
display:'flex',
height:50,
flexDirection:'row',
marginBottom:2,
padding:2,

  },
  headtext:{
    color:'black',
    fontWeight:'bold',
    fontSize:20
  },
  user:{
    display:'flex',
    flexDirection:'column',
    color:'black',
    marginLeft:10
  }
})

export default Header;
