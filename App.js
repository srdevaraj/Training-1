import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View ,Pressable ,Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.contianer}>
      <StatusBar style="auto"/>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 100, height: 100 }}
      />
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
    backgroundColor:'blue',
    width: '50%',
    height: 200,
    
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',

  }
});
