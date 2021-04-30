import React from 'react';
import {View,Text,StyleSheet,ImageBackground,Image,Dimensions} from 'react-native';
import background_color from '../assets/images/background_color.png';
import LoadingLogo from '../assets/images/loading_logo.png';
import LoadingText from '../assets/images/loading_text.png'
class Loading extends React.Component {
    render(){
        return (
           
            

            <ImageBackground

            style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height,flex:1,justifyContent: 'center',alignItems: 'center'}} 
            source={background_color}
            >
                <Image source={LoadingLogo} />
                <Image source={LoadingText} />
                
           
                </ImageBackground>
            
        )
    }
}

export default Loading