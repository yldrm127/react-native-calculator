import { StyleSheet, SafeAreaView, View } from "react-native";
import Form from "../../components/Form"
import Keys from "@/components/Keys";
interface InitialValue {
  id: number;
  text: string;
  style?: any;
}
const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: "black",
  },
  buttonGroup: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 10,
    gap: 5,
  },
  C: {
    color: "red",
  },
  operator: {
    color: "green",
  },
  result: {
    backgroundColor: "green",
  },
  zero: {
    width: 180,
  },
});
const initialValues: InitialValue[] = [
  { id: 1, text: "C", style: styles.C },
  { id: 2, text: "()", style: styles.operator },
  { id: 3, text: "%", style: styles.operator },
  { id: 4, text: "/", style: styles.operator },
  { id: 5, text: "7" },
  { id: 6, text: "8" },
  { id: 7, text: "9" },
  { id: 8, text: "x", style: styles.operator },
  { id: 9, text: "4" },
  { id: 10, text: "5" },
  { id: 11, text: "6" },
  { id: 12, text: "-", style: styles.operator },
  { id: 13, text: "1" },
  { id: 14, text: "2" },
  { id: 15, text: "3" },
  { id: 16, text: "+", style: styles.operator },
  { id: 17, text: "0", style: styles.zero },
  { id: 18, text: "." },
  { id: 19, text: "=", style: styles.result },
];
export default function HomeScreen() {
  
  return (
    <SafeAreaView style={styles.contianer}>
     <Form/>
      <View style={styles.buttonGroup}>
        {initialValues.map((index) => (
          <Keys key={index.id} index={index} />
        ))}
      </View>
    </SafeAreaView>
  );
}
