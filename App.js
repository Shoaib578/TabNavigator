import React from 'react';

import RootNavigator from './navigation/Routes'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native';

 class App extends React.Component {




 

  render(){
    
    return(
     <NavigationContainer>
       <RootNavigator />
     </NavigationContainer>
    )
  }
}

export default App