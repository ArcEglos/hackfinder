import {SELECT_PRICE} from '../actions/prices'

const initialState = {
  selected: null,
  items: [
    {key: 'p1', points: 200, title: 'SPD-Kappe', action: 'CAP'},
    {key: 'p2', points: 1000, title: 'Cooles T-Shirt', action: 'SHIRT'},
    {key: 'p3', points: 5000, title: 'Essen mit Martin', action: 'MEAL'}
  ]
}

export default function prices (state = initialState, action = {}) {
  switch (action.type) {
    case SELECT_PRICE: return Object.assign({}, state, {selected: action.key})
  }
  return state
}
