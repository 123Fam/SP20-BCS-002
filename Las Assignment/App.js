// //import React from "react";


// // export default function fafa() {
// //     return (
// //       <View style={styles.container}>
// //         <Text>Open up App!</Text>
// //         <StatusBar style="auto" />
// //       </View>
// //     );
// //   }
// import React from "react";
// import { View, Button, Text, StyleSheet, TextInput} from 'react-native'
// import { TouchableOpacity } from "react-native-web";
// //import dataform from "./Component/dataform"
// class Form extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       Name1: "Name",
//       phone1: "11",
//       Name2: "Name1",
//       phone2: "22",
//       Name3: "Name2",
//       phone3: "33",
//       phonetex:"",
//       nametex:"",
//     }
//   }
//   Updatename(){
//  var namx= this.state.nametex
//  var phox=this.state.phonetex
//  if(this.state.phone1===phox){
//  this.setState({
// Name1: namx
//  }) 
//  }
//  if(this.state.phone2===phox){
//   this.setState({
//  Name2: namx
//   })}
//   if(this.state.phone3===phox){
//     this.setState({
//    Name3: namx
//     })
//   }}
//   render() {
//     return (
//       <View style={styles.maincontainer}>
        

//         <Text style={{ borderWidth: 1, width: "20ch", marginBottom: 4, marginTop: 4 }}>{this.state.Name1}
//         </Text>
//         <Text style={{ borderWidth: 1, width: "20ch", marginBottom: 4, marginTop: 4 }}>{this.state.Name2}
//         </Text>
//         <Text style={{ borderWidth: 1, width: "20ch", marginBottom: 4, marginTop: 4 }}>{this.state.Name3}
//         </Text>
//         <View>
//           <TextInput style={styles.inputstyle} onChangeText={(e)=>{this.setState({nametex:e})}} autoCapatilize="none" autoCorrect={false}></TextInput>
//           <TextInput style={styles.inputstyle} onChangeText={(c)=>{this.setState({phonetex:c})}} autoCapatilize="none" autoCorrect={false}></TextInput>
//         <Button title="Edit" onPress={()=>{this.Updatename()}} style={{width:"25ch", borderColor:1, backgroundColor: "rgb(0, 139, 255)" }}></Button>
//         </View>
//       </View>
//     )
//   }
// }
// const styles = StyleSheet.create({
//   maincontainer:
//   {
//     flex: 1,

//     fontSize: 14,

//     justifyContent: "center",
//     marginLeft: "45%",
//     AlignItems: "center"
//   },
//   inputstyle: {
//     borderWidth: 1,
//     width: "25ch",
//     margintop: 4,
//     marginBottom: 4,
//     borderColor: "rgba(0,0,0,0.3)",
//     paddingHorizontal: 15,
//     paddingVertical: 7,
//     borderRadius: 1,
//     fontFamily: "regular",
//     fontSize: 18,
//   },
// //   LoginButton:{
// //     borderWidth: 1,
// //     width:"25ch",
// //     marginTop: 10,
// //     marginBottom: 5,
// //     paddingHorizontal:15,
// //     paddingVertical: 7,
// //     backgroundColor: "rgb(0, 139, 255)"

// // }
// })

// export default Form;
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/Log2.PNG")} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 80,
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "40%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});