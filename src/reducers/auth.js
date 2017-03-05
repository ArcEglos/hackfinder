import {SERVER_AUTH_END, UPDATE_POINTS_END} from '../actions/auth'

const initialState = {
  account: null
}

export default function auth (state = initialState, action = {}) {
  switch (action.type) {
    case SERVER_AUTH_END: return Object.assign({}, state, {
      account: action.account
    })
    case UPDATE_POINTS_END: return Object.assign({}, state, {
      account: Object.assign({}, state.account, {points: action.points})
    })
  }
  return state
}
