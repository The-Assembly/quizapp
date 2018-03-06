import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';

class Results extends Component{

  state = { currentScore: 0 }

  Play() {
    Actions.play();
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.scoreText}>{this.props.snapShot}</Text>
        <Button
          title="PLAY AGAIN"
          large
          textStyle={{ fontWeight: "700" }}
          onPress={() => this.Play()}
          buttonStyle={{
            backgroundColor: "#41D3B7",
            width: 300,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingTop: 70
    },
    scoreText: {
      fontSize: 40,
      textAlign: 'center'
    },
    footerText: {
      fontSize: 25,
      color: '#D0D3D4'
    }
});

export default Results
