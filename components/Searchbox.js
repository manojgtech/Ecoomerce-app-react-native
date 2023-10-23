import React,{useState} from 'react';
import {View,Text, StyleSheet,TouchableOpacity,Image,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const Searchbox = () => {
    const navigation = useNavigation();
    const [q,setq]=useState("");
    const searchProds=()=>{
        let qs=q;
        if(qs.trim()!=""){
            navigation.navigate("FilterProducts",{search:q,type:'search'});
        }
       
    }
    return (
        <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',margin:4,flex:1,borderWidth: 1,
        borderTopWidth:1,
        borderColor: '#000',
        paddingBottom: 3,}}>
             <TouchableOpacity onPress={()=>searchProds()}>
            <Icon name="search" size={50} color="#900" />
            </TouchableOpacity>
              <TextInput placeholder='Search products' onChangeText={(text)=>setq(text)} placeholderTextColor="black" style={{color:'black',flex:1}}  />
          </View>

    );
}

const styles = StyleSheet.create({})

export default Searchbox;
