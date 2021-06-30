import React from "react"
import { View, Text, SafeAreaView,Button,StyleSheet} from "react-native"

const App = () => {
  /*function sayHello(){
    console.log("merhabalar")
  }*/
  const sayHello = () => {
    console.log("merhabalar !")
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box_1} />
      <View style={styles.box_2} />
      <View style={styles.box_3} />
      <View style={styles.box_4} />
    </SafeAreaView>
  )
}
const styles= StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    marginLeft:10,
    marginRight:10
  },
  box_1:{
    width:75,
    height:75,
    backgroundColor:'red'
  },
  box_2:{
    width:75,
    height:75,
    backgroundColor:'aqua'
  },
  box_3:{
    width:75,
    height:75,
    backgroundColor:'orange'
  },
  box_4:{
    width:75,
    height:75,
    backgroundColor:'blue'
  },
  /*upper_view_container:{
    flex:1,
    backgroundColor:'red',
  },
  center_view_container:{
    flex:1,
    backgroundColor:'green',
  },
  bottom_view_container:{
    flex:2,
    backgroundColor:'blue'
  }*/
})
export default App;



/*const styles= StyleSheet.create({
  container:{
    backgroundColor:'red',
    padding:15,
    margin:5,
    borderRadius:5,
    flexDirection:"row",
    justifyContent:"center"
  },
  text:{
    textAlign:"center",
    marginRight:15,
    backgroundColor:"blue",
    padding:10,
    borderRadius:5
  }
})*/

{/*<Text style={{color:"red"}}>Hello World 2</Text>
      <Button color="lightcoral" disabled={false} onPress={sayHello} title="Press Me" />*/}

      /* 
      <SafeAreaView style={styles.container}>
      <View style={styles.upper_view_container}>
        <Text>Hello World</Text>
      </View>
      <View style={styles.center_view_container}>
        <Text>Hello World</Text>
      </View>
      <View style={styles.bottom_view_container}>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
      
      */