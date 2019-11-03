import SUT from './env.utils'

describe('utils/env.utils', () => {
  it('should get an env by key', () => {
    // given environment data with two keys
    const ENV_DATA = {key_one: 'key one', key_two: 'key two'}
    const environment = SUT(ENV_DATA)
    // when we want data from a specific key
    const result = environment.getEnvByKey('key_one')
    // we should get the expected result
    expect(result).toEqual('key one')
  })

  it('should get all envs', () => {
    // given environment data with two keys
    const ENV_DATA = {key_one: 'key one', key_two: 'key two'}
    const environment = SUT(ENV_DATA)
    // when we want all the envs
    const result = environment.getAll()
    // we should get the expected result
    expect(result).toEqual(ENV_DATA)
  })
})
