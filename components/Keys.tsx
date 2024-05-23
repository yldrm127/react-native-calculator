import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useCallback } from "react";
import { calculationStore } from "@/store/calculation";
interface InitialValue {
  id: number;
  text: string;
  style?: any;
}
const Keys: React.FC<{ index: InitialValue }> = ({ index }) => {

 const add= calculationStore((state)=>state.add)
 const reset=calculationStore((state)=>state.reset)
 const calculate=calculationStore((state)=>state.calculate)
 const num =calculationStore((state)=>state.num)
 const regex=/\(/g
  function HandleEqual(params: InitialValue) {
    return params.text == "=" || params.text == "0" ? index.style : {};
  }
  const HandleClick=useCallback(()=>{
    if (index.text=="C") {
      reset()
    }
    else if(index.text=="="){
     calculate()
    }
    else{
      console.log(num)
     
      add(index.text)
     
      
    }
  },[])

  
  return (
    <TouchableOpacity
      style={[styles.button, HandleEqual(index)]}
      onPress={HandleClick}
    >
      <Text style={[styles.text, index.style]}>{index.text}</Text>
    </TouchableOpacity>
  );
};
export default Keys;

const styles = StyleSheet.create({ 
  button: {
    borderWidth: 1,
    width: 90,
    height: 90,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#191919",
  },
  text: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
});
