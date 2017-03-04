import {FETCH_BUZZES_END} from '../actions/buzz'

const initialState = {
  loading: false,
  items: []
}

export default function buzzes (state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_BUZZES_END: return Object.assign({}, state, {
      loading: false,
      items: action.items.map(
        item => Object.assign(
          {}, item, {expirationDate: new Date(item.expirationDate)}
        )
      )
    })
  }
  return state
}
