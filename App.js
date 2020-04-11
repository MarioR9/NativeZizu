import React from 'react';
import { StyleSheet , Text, Button} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import DrawerNavigation from './components/drawerNav.js'

export default function App({navigation}) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      <Text onPress={()=>navigation.openDrawer()} title="Home"/>
      </SafeAreaView>
      <DrawerNavigation/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    resizeMode: 'center',
    width: 28, 
    height: 28, 
    marginRight: 10,
    marginLeft: 20
  },
  

});
