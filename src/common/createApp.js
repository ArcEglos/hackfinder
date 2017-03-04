import {combineReducers, createStore, applyMiddleware} from 'redux'

import {thunk, logger} from './middleware'
import * as reducers from '../reducers'

export default function createApp (options = {}) {
  return {
    store: createStore(
      combineReducers(reducers),
      options.state || {},
      applyMiddleware(thunk(options), logger(options))
    ),
    api: options.api
  }
}
