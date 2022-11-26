import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import db from '../config';

export default class EndScreen extends Component {
  render() {
    return (
      <View style={styles.bg}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: 'https://static2.stuff.co.nz/1406525193/462/10320462.jpg',
          }}
        />
        <Text style={styles.textStyle}> Thank you for your response! </Text>
        <View>
          <TouchableOpacity style={styles.endButtonStyle}>
            <Text
              style={styles.backToStyle}
              onPress={() => {
                this.props.navigation.navigate('Home');
              }}>
              Back to homescreen
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'black',
    height: 800,
  },
  textStyle: {
    fontSize: 50,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
    color: 'cyan',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    marginBottom: 'auto',
  },
  imageStyle: {
    width: 300,
    height: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 30,
  },
  endButtonStyle: {
    borderWidth: 1,
    borderRadius: 15,
    margin: 10,
    width: 150,
    height: 50,
    backgroundColor: 'cyan',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 60,
  },
  backToStyle: {
    fontSize: 20,
    fontFamily: 'Times New Roman',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
