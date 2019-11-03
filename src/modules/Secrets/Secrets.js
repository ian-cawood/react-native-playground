import React from 'react'
import {View} from 'react-native'
import {ListItem} from 'react-native-elements'

import ENV_DATA from '../../../env.json'
import ENV from '../../common/utils/env.utils'

const environment = ENV(ENV_DATA)

const list = [
  {
    name: 'key_one',
    subtitle: environment.getEnvByKey('key_one'),
  },
  {
    name: 'secret_two',
    subtitle: environment.getEnvByKey('secret_two'),
  },
]

const Secrets = () => (
  <View>
    {list.map((l, i) => (
      <ListItem key={i} title={l.name} subtitle={l.subtitle} bottomDivider />
    ))}
  </View>
)

export default Secrets
