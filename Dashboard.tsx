import React from 'react'
import { SafeAreaView, Text, StyleSheet, View } from 'react-native'
import { RouteType } from '../routes/RouteType'
import Login from './Login'
type Props = RouteType<'Dashboard'>

const Dashboard: React.FC<Props> = ({ navigation, route }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontSize: 30,fontWeight:300,color:'black' }}> Dashboard </Text>
            <View style={{marginTop:30}}>
            <Text style={{color:'black'}}>Profile</Text>
           <Text style={{color:'black'}}>Orders</Text>
           <Text style={{color:'black'}}>Logout</Text>
           <Login />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor:'white'
    },
})

export default Dashboard
