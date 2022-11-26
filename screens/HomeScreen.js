import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';

export default class HomeScreen extends Component {
  teamA() {
    db.ref('/').update({
      teamA: 1,
    });
    this.props.navigation.navigate('End');
  }

  teamB() {
    db.ref('/').update({
      teamB: 1,
    });
    this.props.navigation.navigate('End');
  }

  render() {
    return (
      <View>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity>
              <Image
                style={{ width: 300, height: 220, marginLeft: 5 }}
                source={require('../assets/TeamImage.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.ratingContainer}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 25,
                fontFamily: 'Times New Roman',
                fontStyle: 'italic',
                fontWeight: 'bold',
              }}>
              Vote Here
            </Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                this.teamA();
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Times New Roman',
                  fontStyle: 'italic',
                }}>
                Team A
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                this.teamB();
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Times New Roman',
                  fontStyle: 'italic',
                }}>
                Team B
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 15,
    margin: 10,
    width: 150,
    height: 50,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
