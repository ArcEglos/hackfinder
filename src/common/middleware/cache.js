import {AsyncStorage} from 'react-native'

/**
 * Logging middleware printing action type and data
 */
export default function cache (options) {
  return ({getState}) => next => action => {
    let state = getState()
    AsyncStorage.setItem('state', JSON.stringify({auth: state.auth}))
    return next(action)
  }
}
