import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    component:{
        marginTop:10,
         backgroundColor:"#f4f4f9",
         padding:20,
         marginLeft:10,
         marginRight:12,
         borderRadius:10,
        },

    image:{
    
        height:Dimensions.get("window").height/5,
        width:Dimensions.get("window").width/3,
        borderRadius:10,
    
        
    },
    title:{
        fontWeight:"bold",
        fontSize:15,
        width:Dimensions.get("window").width/3,
        marginTop:7 

        
    },
    price:{
        marginTop:5,
    },

    stok:{
        color: '#a4161a',
        marginTop:7,
        fontSize:15
    }


})
