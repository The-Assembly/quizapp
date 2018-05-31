import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Deck from './Deck';
import Timer from './Timer';

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

function shuffleQuestions(questionsArray) {
  for (var i = 0; i < questionsArray.length; i++)
    shuffleArray(questionsArray[i].answers);
  return questionsArray;
}

const QuestionData = [
  {
    id: 1,
    text: 'Who is the current Chief Executive Officer of Apple?',
    answers: [
      { text: 'Tim Cook', correct: true },
      { text: 'Jonathan Ive', },
      { text: 'Steve Jobs', }
    ]
  },
  {
    id: 2,
    text: 'Who invented the first wireless remote control in 1898?',
    answers: [
      { text: 'Nikola Tesla', correct: true },
      { text: 'Thomas Edison' },
      { text: 'Albert Einstein' }
    ]
  },
  {
    id: 3,
    text: 'What is the chemical formula for distilled water?',
    answers: [
      { text: 'H2O', correct: true },
      { text: 'CO2' },
      { text: 'H2O2' }
    ]
  },
  {
    id: 4,
    text: 'Who is the most subscribed Youtuber as of 2018?',
    answers: [
      { text: 'PewDiePie', correct: true },
      { text: 'Germán Garmendia' },
      { text: 'NigaHiga' }
    ]
  },
  {
    id: 5,
    text: 'Which CEO of Yahoo stepped down in June 2017?',
    answers: [
      { text: 'Marissa Mayer', correct: true },
      { text: 'Scott Thompson' },
      { text: 'Jerry Yang' },
    ]
  },
  {
    id: 6,
    text: 'Which game inspired Shigeru Miyamoto\'s Mario character?',
    answers: [
      { text: 'Donkey Kong', correct: true },
      { text: 'Zelda' },
      { text: 'Pokemon' },
    ]
  },
  {
    id: 7,
    text: 'Where in the solar system would you find the Sea of Tranquility?',
    answers: [
      { text: 'The Moon', correct: true },
      { text: 'Mars' },
      { text: 'Venus'}
    ]
  },
  {
    id: 9,
    text: 'How is the painting originally titled "La Gioconda" better known these days?',
    answers: [
      { text: 'Mona Lisa', correct: true },
      { text: 'The Last Supper' },
      { text: 'The Scream' }
    ]
  },
  {
    id: 10,
    text: 'Who directed the Lord of the Rings fantasy film series?',
    answers: [
      { text: 'Peter Jackson', correct: true },
      { text: 'Christopher Nolan' },
      { text: 'Jon Favreau' }
    ]
  },
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
          data={shuffleQuestions(QuestionData)}
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
