import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View ,Pressable} from 'react-native';

export default function App() {
  return (
      <View style={styles.contianer}>
      <StatusBar style="auto"/>
        <View style={styles.v2}>
          <Text style={{color:'white'}}>Left</Text>
          <Text style={{color:'white'}}>Right</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  v2:{
    flexDirection:'row',
    backgroundColor:'blue',
    padding: 20,
    width: '50%',
    height: 200,
    alignItems: 'center',
    justifyContent:'center',
  }
});
