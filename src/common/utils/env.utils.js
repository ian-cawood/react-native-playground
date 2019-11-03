const environment = ENV_DATA => {
  const getEnvByKey = key => ENV_DATA[key]
  const getAll = () => ENV_DATA

  return {getEnvByKey, getAll}
}

export default environment
