/**
 * Thunk middleware which also provides an api client for async backend
 * calls.
 */
export default function ({api, history}) {
  return ({dispatch, getState}) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, {api, history, getState})
    }

    return next(action)
  }
}
