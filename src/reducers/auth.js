import {SERVER_AUTH_END} from '../actions/auth'

const initialState = {
  account: null
}

export default function auth (state = initialState, action = {}) {
  switch (action.type) {
    case SERVER_AUTH_END: return Object.assign({}, state, {
      account: action.account
    })
  }
  return state
}
