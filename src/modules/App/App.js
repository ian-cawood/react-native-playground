import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Home from '../Home'
import Secrets from '../Secrets'

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Secrets: {screen: Secrets},
})

const App = createAppContainer(MainNavigator)

export default App
