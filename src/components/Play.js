import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Deck from './Deck';
import Timer from './Timer';

const DATA = [
  { id: 1, text: 'Who is the current Chief Executive Officer of Apple?', A1: 'Tim Cook', P2: 'Jonathan Ive', P3: 'Steve Jobs', order: Math.floor(Math.random() * 5) },
  { id: 2, text: 'Who invented the first wireless remote control in 1898?', A1: 'Nikola Tesla', P2: 'Thomas Edison', P3: 'Albert Einstein', order: Math.floor(Math.random() * 5) },
  { id: 3, text: 'What is the chemical formula for distilled water?', A1: 'H2O', P2: 'CO2', P3: 'H2O2', order: Math.floor(Math.random() * 5) },
  { id: 4, text: 'Who is the most subscribed Youtuber as of 2018?', A1: 'PewDiePie', P2: 'Germán Garmendia', P3: 'NigaHiga', order: Math.floor(Math.random() * 5) },
  { id: 5, text: 'Which CEO of Yahoo stepped down in June 2017?', A1: 'Marissa Mayer', P2: 'Scott Thompson', P3: 'Jerry Yang', order: Math.floor(Math.random() * 5)  },
  { id: 6, text: 'Which game inspired Shigeru Miyamoto\'s Mario character?', A1: 'Donkey Kong', P2: 'Zelda', P3: 'Pokemon', order: Math.floor(Math.random() * 5)},
  { id: 7, text: 'Where in the solar system would you find the Sea of Tranquility?', A1: 'The Moon', P2: 'Mars', P3: 'Venus', order: Math.floor(Math.random() * 5) },
  { id: 9, text: 'How is the painting originally titled \'La Gioconda\' better known these days?', A1: 'Mona Lisa', P2: 'The Last Supper', P3: 'The Scream', order: Math.floor(Math.random() * 5)},
  { id: 10, text: 'Who directed the Lord of the Rings fantasy film series?', A1: 'Peter Jackson', P2: 'Christopher Nolan', P3: 'Jon Favreau', order: Math.floor(Math.random() * 5)},

];

export default class Play extends React.Component {

 state = { positive: 0 , negative: 0 }

  swipe = () => {
    this.timerComp.negative5Seconds();
  }

  wrongAnswer = () => {
    this.timerComp.negative10Seconds();
  }

  correctAnswer = () => {
    this.timerComp.positiveSeconds();
  }

  clearTimer = () => {
    this.timerComp.clearTimer();
  }

  render() {
    return (
      <View style={styles.container}>
        <Timer
        ref={instance => { this.timerComp = instance; }}
        />
        <Deck
          data={DATA}
          onSwipeLeft={()=> this.swipe()}
          onSwipeRight={() => this.swipe()}
          correctAnswer={()=> this.correctAnswer()}
          wrongAnswer={()=> this.wrongAnswer()}
          clearTimer={()=>this.clearTimer()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40
    },
    timerText: {
      fontSize: 40,
      textAlign: 'center'
    }
});
