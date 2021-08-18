import React from 'react';
import { View,Text,Image } from 'react-native';

import styles from './storecard.style';

const shopcard=({store})=>{

    let value=""
    if(store.inStock==false){value="STOKTA YOK"}
    
  return(  

    <View style={styles.component}>
    <Image style={styles.image} source={{uri: store.imgURL}} />
    <Text style={styles.title}>{store.title}</Text>
    <Text style={styles.price}>{store.price}</Text> 
    <Text style={styles.stok}>{value}</Text>

   </View>
  )
}

export default shopcard;
