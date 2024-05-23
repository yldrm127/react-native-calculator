import { View, Text, StyleSheet } from "react-native";
import {useState} from "react";
import { calculationStore } from "@/store/calculation";
const Form = () => {
 const num=calculationStore((state:any)=>state.num)
 console.log("form rendered")
  return (
    <View style={styles.container}>
      <Text style={styles.form}>{num}</Text>
    </View>
  );
};

export default Form;
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 200,
    display:"flex",
    justifyContent:"flex-end"
  },
  form:{
    fontSize:40,
    color:"white",
    textAlign:"right"
  }
});
