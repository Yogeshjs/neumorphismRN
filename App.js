import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Platform, Image, TouchableOpacity } from 'react-native';
// import { NeuView, NeuInput, NeuBorderView   } from 'react-native-neu-element'
import { Shadow } from 'react-native-neomorph-shadows';
import { AntDesign } from '@expo/vector-icons'
import logo from './assets/signup-bg-pattern.png'
import Shadown from './Shadow'
import { hexToHsl, hslToHex } from './utils'

import Neumorphism from "react-native-neumorphism";

import SelectDropdown from 'react-native-select-dropdown'

import { LinearGradient } from 'expo-linear-gradient';

function App() {

  const countries = ["Egypt", "Canada", "Australia", "Ireland"]

  const cities = ["Chennai", "Coimbatore", "Salem", "Erode"]

  return (
    <View style={{ backgroundColor: "#EEF0F6", flex: 1, padding: 5}}>
      <View>
        <Image style={{maxWidth: '100%', height: 242, position: 'absolute', zIndex: -1 }} source={logo} />
      </View>
      <View style={styles.headingWrap}>
          <Text style={styles.heading}>Sign Up</Text>
      </View>
      <View style={styles.formWrap}>

        <View style={[styles.inputWrap, styles.sdoWhite]}>
          <View style={[styles.inputWrapInside, styles.sdoBlack]}>
            <TextInput style={styles.input} value='heaven'/>
          </View>
        </View>

        <View style={[styles.inputWrap, styles.sdoWhite]}>
          <View style={[styles.inputWrapInside, styles.sdoBlack]}>
            <TextInput style={styles.input} value='heaven'/>
          </View>
        </View>

        <View style={[styles.inputWrap, styles.sdoWhite]}>
          <View style={[styles.inputWrapInside, styles.sdoBlack]}>
            <SelectDropdown buttonTextStyle={styles.input} data={countries} renderDropdownIcon={ () => <AntDesign name="down" size={16} color="black" /> } />
          </View>
        </View>

        <View style={[styles.inputWrap, styles.sdoWhite]}>
          <View style={[styles.inputWrapInside, styles.sdoBlack]}>
            <SelectDropdown buttonTextStyle={styles.input} data={cities} renderDropdownIcon={ () => <AntDesign name="down" size={16} color="black" /> } />
          </View>
        </View>

        <View style={[styles.inputWrap, styles.sdoWhite]}>
          <View style={[styles.inputWrapInside, styles.sdoBlack]}>
            <TextInput style={styles.input} value='heaven'/>
          </View>
        </View>

      </View>
      <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "center", marginBottom: 10,}}>
        <Text>Already have an account ? </Text>
        <Button style={{ flex: 1 }} title='Log in' />
      </View>
      <Button title='Go'/>
    </View>
  );
}

const exp = () => {
  return (
    <Neumorphism
      lightColor={'#dedddd'}
      darkColor={'#979797'}
      shapeType={'flat'}
      radius={50}
    >
    <View style={{ width: 200, height: 200}}>
      <Text>TEST</Text>
    </View>
  </Neumorphism>
  )
}

const test = () => {
  return (
    <View style={styles.formWrap}>
      <View style={styles.sdoWhite}>
        <View style={styles.sdoBlack}>
          <View style={styles.sdoInsideBlack}></View>
            <TextInput style={styles.input} value="Hello"  />
          <View style={styles.sdoInsideWhite}></View>
        </View>
      </View>
    </View>
  )
}

const nueElements =  () => {
  return (
    <View style={{ padding: 32, justifyContent: 'space-around', flex: 1, backgroundColor: '#eef2f9' }}>
      <NeuView color='#eef2f9' height={100} width={100} borderRadius={16}>
        <Text>Hello</Text>
      </NeuView>
      <NeuView color='#eef2f9' height={100} width={100} borderRadius={16} inset>
        <Text>World</Text>
      </NeuView>
      <View>
        <NeuInput placeholder='Text Input...' />
      </View>
      <NeuBorderView
        //Required
        width={200}
        height={100}
        color={'#eef2f9'}

        //Optional
        //Specify the width of the border
        //Default: 10
        borderWidth={10}

        //Optional
        //Specify the radius of the border
        //Default: 0
        borderRadius={16}
      >
        <TextInput value="Hello" />
      </NeuBorderView>
      </View>
  )
}

const app2 = () => {

  const customInsetLightShadow = {}

  const customInsetDarkShadow = {}

  const color = '#eef2f9'
  const width = 100
  const height = 100
  const radius = 0
  const borderRadius  = 0

  const { h, s, l } = hexToHsl(color);
  const light = hslToHex(h - 2 < 0 ? 0 : h - 2, s, l + 5 > 100 ? 100 : l + 5);
  const dark = hslToHex(h, s, l - 8 < 0 ? 0 : l - 20);
  const mid = hslToHex(h, s, l - 5 < 0 ? 0 : l - 5);

  const insetLightSetting = {
    width,
    height,
    blur: 5,
    spread: 0,
    borderRadius,
    radius,
    color: dark,
    offsetX: -3,
    offsetY: -3,
    opacity: 1,
    ...customInsetDarkShadow
  };

  const insetDarkSetting = {
    width: width + 2,
    height: height + 2,
    blur: 5,
    spread: 1,
    radius,
    color: light,
    borderRadius,
    offsetX: 0,
    offsetY: 0,
    opacity: 1,
    ...customInsetLightShadow
  };


  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 39, backgroundColor: '#eef2f9'}}>
        <LinearGradient
          colors={false ? customGradient : [mid, light]}
          start={ {x: 0.5, y: 0.0} } 
          end={{ x: 0.5, y: 1.0 }}
          style={{
            width: 100,
            height: 100
          }}
        />
          <View>
            <Shadown setting={insetDarkSetting}  />
          </View>
          <View>
            <Shadown setting={insetLightSetting}  />
          </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  formWrap: {
    flex: 1,
    // backgroundColor: 'gray',
    justifyContent: 'flex-start',
    paddingTop: 160,
    alignSelf: 'stretch',
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: "#EEF0F6",
  },
  // inputWrap: {
  //   marginBottom: 20,
  //   height: 52,
  //   backgroundColor: "#EEF0F6",
  //   zIndex: -1,
  //   borderRadius: 17,
  // },
  // inputWrapInside: {
  //   marginBottom: 20,
  //   height: 52,
  //   backgroundColor: "#EEF0F6",
  //   zIndex: -1,
  //   borderRadius: 17,
  // },
  sdoWhite: {
    shadowColor: "#ffffff",
    shadowOffset: {
      width: -8,
      height: -8,
    },
    shadowOpacity: 0.58,
    shadowRadius: 10.00,
    elevation: 24,
    width: '100%',
    alignSelf: 'stretch',
    borderRadius: 17,
    
  },
  sdoInsideBlack: {
    shadowColor: "#00000020",
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.00,
    elevation: 14,
    width: '100%',
    alignSelf: 'stretch',
    borderRadius: 17,
    height: 10,
    position: 'absolute',
    top: -8,
    
  },
  sdoBlack: {
    shadowColor: "#00000020",
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowOpacity: 0.58,
    shadowRadius: 10.00,
    elevation: 24,
    width: '100%',
    alignSelf: 'stretch',
    borderRadius: 17,
  },
  sdoInsideWhite: {
    shadowColor: "#ffffff",
    shadowOffset: {
      width: -8,
      height: -8,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10.00,
    elevation: 14,
    width: '100%',
    alignSelf: 'stretch',
    borderRadius: 17,
    height: 10,
    position: 'absolute',
    bottom: -9,
    
  },
  input: {
    width: '100%',
    alignSelf: 'stretch',
    height: 52,
    borderRadius: 17,
    paddingTop: 20,
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 16,
    letterSpacing: -0.2,
    backgroundColor: "#EEF0F6",
    color: '#585858',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ffffffb3',
  },
  // headingWrap: {
  //   alignSelf: 'stretch',
  //   marginTop: 50,
  // },
  // heading: {
  //   fontWeight: 'bold',
  //   fontSize: 33,
  //   lineHeight: 49,
  //   color: '#EEF0F6',
  //   marginTop: 50,
  //   marginBottom: 68,
  //   marginLeft: 40,
  // }
});

export default App