import React from 'react';
import {View,Text, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'


class SignIn extends React.Component {
    login = (user)=>{
        AsyncStorage.setItem('user',JSON.stringify(user))
        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'home', screen: 'Home' }]
        });
    }

    

    render(){
        return(
            <View>
                <Text>SignIn</Text>
                <Button title='login' onPress={()=>{
                    const user = {
                        "user":"Shoaib",
                        "email":"theshoaib@gmail.com"
                    }
                    this.login(user)
                }}/>
            </View>
        )
    }
}

export default SignIn