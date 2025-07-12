import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View ,Pressable} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.v1}>
        <StatusBar style="auto" />
      <TextInput
        style = {styles.TextInput}
        placeholder='Enter your name :'
        placeholderTextColor={'grey'}
        secureTextEntry
        multiline
        numberOfLines={2}
        autoFocus
      />
      
      <Button
        title='Click here'
        color={"red"}
        onPress={()=>alert('Button pressed...')}
      />
      <Pressable
        onPress={() => console.log('Pressed')}
        style={({ pressed }) => [
        {
          backgroundColor: pressed ? 'pink' : 'red',
          padding: 10,
         
          borderRadius: 20
        },
        ]}
      >
  <Text style={{ color: 'white', fontWeight: 'bold' }}>Click Me</Text>
</Pressable>
      </View>
      <View>
        <Text>This text is in 2nd View...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput:{
    justifyContent:'center',
    textAlign:'center',
    fontSize:20,
    color:'black',
    padding:10,
    backgroundColor:'white'
  },
  v1:{
    backgroundColor:'blue',
    color:'white'
  }
});
