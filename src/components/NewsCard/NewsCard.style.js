import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"white",
        margin:10,
        borderRadius:10
    },
    image:{
        height:Dimensions.get('window').height / 4,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    inner_container:{
        padding:12
    },
    title:{
        fontSize:18,
        fontWeight:"bold"
    },
    description:{
        marginTop:5
    },
    author:{
        fontStyle:"italic",
        textAlign:"right"
    }
})