import React, { Component } from 'react'
import { ScrollView, Text, View, Image } from 'react-native'

import styles from './App.styles'

const headerText = 'Learn React Native \n By \n Durrell Gemuh'

const AboutMe = (props) => {
  return (
    <View>
      <Image
        source={require('./../res/images/pp.jpg')}
        style = {styles.pp}
      />
      <Text> 
        {props.intro}
        {props.skills}
        {props.photo}
    </Text>       
    </View>
  )
}

export class LearnRN extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View>
    <Text> {headerText} </Text>
        </View>
        <AboutMe 
        intro = {'I am a level 500 network engineering student of faculty of engineering and technology, university of buea. I love android development my skills include '}
        skills={'java'}
        
        />
      </ScrollView>
    )
  }
}

export default LearnRN

