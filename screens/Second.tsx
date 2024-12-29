import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Platform, Image } from 'react-native';
import MyLinearGradient from '../components/MyLinearGradient';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from "../navigation/Navigation"

type SecondProps = NativeStackScreenProps<RootStackParamList, 'Second'>

const Second = ({navigation}:SecondProps) => {
  const logos = [
    require('../assets/Icons/Dribbble.png'), 
    require('../assets/Icons/Meta.png'), 
    require('../assets/Icons/Google.png'), 
    require('../assets/Icons/Oracle.png'), 
    require('../assets/Icons/FedEx.png'), 
    require('../assets/Icons/Lego.png'), 
  ];

  return (
    <MyLinearGradient style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor='#333' />
      {Platform.OS==='web' && 
          <View style={styles.webHeader}>
              <TouchableOpacity onPress={()=>{navigation.navigate('First')}}>
                <View style={styles.left}>
                    <Image source={require('../assets/Images/NewLogo.png')} style={styles.logo}/>
                    <Text style={styles.buttonText1}>Kokoro.doctor</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.right}>
                  <TouchableOpacity style={styles.SignUpButton}>
                      <Text style={styles.whiteText}>Sign Up</Text>
                  </TouchableOpacity>
              </View>
          </View>
      }
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          Your 24/7 AI Heart Specialist – Right in Your Pocket
        </Text>
        <Text style={styles.subtitle}>
          <Text style={styles.highlight}></Text>
          Upload Angiography and Heart Reports for 100% Accurate Analysis of Your Heart Health. Monitor, Measure, and Improve Your Condition Anytime, Anywhere.

        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Login')}}>
            <Text style={styles.buttonText}>Check Your Heart Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.demoButton]}>
            <Text style={[styles.buttonText, styles.demoButtonText]}>Upload Reports for Analysis</Text>
          </TouchableOpacity>
        </View>
      </View>
      {Platform.OS==='web' && 
          <View style={styles.bottomContainer}>
            <Text style={styles.BottomText}>
              Join Thousands of Heart Patients Who Trust Kokoro.Doctor
            </Text>
            <View style={styles.logosContainer}>
              {logos.map((logo, index) => (
                <Image key={index} source={logo} style={styles.Bottomlogo} />
              ))}
            </View>
          </View>
      }
    </MyLinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android:{
        justifyContent: 'center',
        alignItems: 'center',
      },
      ios:{
        justifyContent: 'center',
        alignItems: 'center',
      },
      web:{
        padding:0,
        margin:0,
      }
    }),
  },
  webHeader:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:100,
    marginTop:20,
    marginHorizontal:30,
  },
  logo:{
    width:25,
    height:25,
  },
  left:{
    flexDirection:"row",
    gap:5,
  },
  right:{

  },
  SignUpButton:{
    backgroundColor:"black",
    borderRadius:30,
    padding:10,
    width:100,
    justifyContent:"center",
    alignItems:"center",
  },
  whiteText:{
    // color:"black",
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    alignItems: 'center',
    ...Platform.select({
      web:{
        alignItems:"flex-start",
        marginLeft:150,
      }
    }),
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    // color: '#fff',
    textAlign: 'center',
    color: '#00A3FF',
    fontFamily: 'Poppins',
    marginBottom: 10,
    ...Platform.select({
      web:{
        fontSize:50,
        width:600,
        textAlign:"left",
      }
    })
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    ...Platform.select({
      web:{
        textAlign:"left",
        color:"#A4A5AA",
        width:600,
        size:22,
      }
    })
  },
  highlight: {
    color: '#EA00FF',
  },
  buttonContainer:{
    ...Platform.select({
      web:{
        flexDirection:"row",
        gap:20,
      }
    }),
  },
  button: {
    backgroundColor: '#00A3FF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 10,
    ...Platform.select({
      web:{
        borderRadius: 40,
        paddingVertical:10,
      }
    }),
  },
  demoButton: {
    backgroundColor: 'black',
  },
  buttonText1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00A3FF',
    letterSpacing: -1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  demoButtonText: {
    color: 'white',
  },
  bottomContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:140,
    borderTopWidth:1,
    borderTopColor:"black",
    marginHorizontal:50,
  },
  BottomText: {
    marginBottom: 20,
    fontSize: 16,
    color:"black",
    textAlign: 'center',
  },
  logosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
  },
  Bottomlogo: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
});

export default Second;