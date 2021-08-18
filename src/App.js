import React from 'react';
import { StyleSheet, Text, View,SafeAreaView, TextInput, FlatList } from 'react-native';
import Storecard from './components/card';
import storeapp_data from './storeapp_data.json';

function App() {

const renderitem=({item}) => <Storecard store={item}/>

return (
    <SafeAreaView style={style.component}>
      <Text style={style.marka}>PATIKASTORE</Text>
      
      <TextInput
        style={style.input}
        placeholder="Urun Ara"/>

      <FlatList
        horizontal={false} 
        data={storeapp_data}
        renderItem={renderitem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        />

    </SafeAreaView>    

  );
}

const style=StyleSheet.create({
  component:{
    backgroundColor:"#ff9b54"
  },
  
  marka:{
    fontSize:25,
    textAlign:"center"
    
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor:"#f4f4f9",
  },
})

export default App
