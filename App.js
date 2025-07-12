import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View ,Pressable} from 'react-native';

export default function App() {
  return (
      <View style={styles.v2}>
      <StatusBar style="auto"/>
        <Text style={{color:'white'}}>Left</Text>
        <Text style={{color:'white'}}>Right</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  v2:{
    flexDirection:'row',
    width:'100%',
    padding:20,
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center',
  }
});
