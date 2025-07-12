import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View ,Pressable ,Image, FlatList} from 'react-native';

export default function App() {
  return (
    <View style={styles.contianer}>
      <StatusBar style="auto"/>
      <View style={styles.v1}>
        <Image
          source={require('./assets/logo.png')}
          resizeMode='repeat'
          style={{ width: 50, height: 100 }}
        />
        <Image
          source={require('./assets/logo.png')}
          resizeMode='contain'
          style={{ width: 50, height: 100 }}

        />
        <Image
          source={require('./assets/logo.png')}
          resizeMode='repeat'
          onError={() => console.log('Image failed to load')}
          onLoad={() => console.log('Image loaded successfully')}
          onLoadEnd={() => console.log('Image load ended')}
          onLoadStart={() => console.log('Image load started')}
          onProgress={({ nativeEvent }) => console.log('Image loading progress:', nativeEvent)}
          blurRadius={30}
          borderRadius={10}
          accessible={true}
          style={{ width: 50, height: 100 }}
        />
      </View>
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
  v1:{
    backgroundColor:'red',
    width:'50%',
    flexDirection:'row',
    justifyContent:'center',
    padding: 10,
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
