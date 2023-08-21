import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Loginpage } from './src/components/loginpage';
import { Welcomepage } from './src/components/Screen/Welcomepage';
import { Forgetpage } from './src/components/Forgetpage';
import { Resetpage } from './src/components/Resetpage';
import { Splash } from './src/components/Screen/splash/index';
import { Successfulpage } from './src/components/Screen/successfulpage';


const App = () => {
  return (
    <View style={styles.container}>
{/* <Loginpage/> */}
{/* <Welcomepage/> */}
{/* <Forgetpage/> */}
{/* <Resetpage/>*/}
<Successfulpage />
{/* <Splash /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
