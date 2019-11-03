/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react'
import {Button} from 'react-native-elements'
import {SafeAreaView, ScrollView, View, StatusBar} from 'react-native'

import {Header} from 'react-native/Libraries/NewAppScreen'

import styles from './Home.styles'

const Home = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Button style={styles.sectionTitle} title="Secrets" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  )
}

Home.navigationOptions = {
  title: 'HOME',
}

export default Home
