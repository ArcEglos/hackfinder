import {combineReducers, createStore, applyMiddleware} from 'redux'

import {thunk, logger, cache} from './middleware'
import * as reducers from '../reducers'

export default function createApp (options = {}) {
  return {
    store: createStore(
      combineReducers(reducers),
      options.state || {},
      applyMiddleware(thunk(options), logger(options), cache(options))
    ),
    api: options.api
  }
}
