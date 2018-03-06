import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Timer extends Component {

  state = { time: 20, playerTime: 0 };

  componentDidMount() {
   this.inte =  setInterval(() => this.timeCap() , 1000);
  }

  timeCap() {
    this.setState({
      time: this.state.time - 1,
      playerTime: this.state.playerTime + 1
    })
    if(this.state.time < 1) {
      this.callRedirect();
    }
  }


  negative5Seconds() {
    this.setState({
      time: this.state.time - 5
    })
  }

  negative10Seconds() {
    this.setState({
      time: this.state.time - 10,
    })
  }

  positiveSeconds() {
    this.setState({
      time: this.state.time + 5
    })
  }

  clearTimer(){
    clearInterval(this.inte);
  }

  callRedirect() {
    const snapShot = "You lasted " + this.state.playerTime + " seconds";
    clearInterval(this.inte);
    //Passing the highscore to next page and calling the next page with Actions.results
    Actions.results({ snapShot });
  }

  render() {
    if(this.state.time <= 0) {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <View style={{flex: 1}}>
          <Text style={styles.timerText}>0</Text>
          </View>
        </View>
      );
    }
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <View style={{flex: 1}}>
        <Text style={styles.timerText}>{this.state.time}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    timerText: {
      fontSize: 40,
      textAlign: 'center',
    },
    playerLifeText: {
      fontSize: 40,
      textAlign: 'center'
    }
});
export default Timer;
