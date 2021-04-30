import React from 'react';
import {View,Text,Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

class Home extends React.Component {
    render(){
        return (
            <View>
            <Text>Home</Text>
            <Button title='logout' onPress={async()=>{
             await AsyncStorage.removeItem('user')
             this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'auth', screen: 'signin' }]
            });
            }}/>
            </View>
        )
    }
}


export default Home