/**
 * Logging middleware printing action type and data
 */
export default function logger (options) {
  return store => next => action => {
    if (typeof action !== 'function') {
      let {type, ...rest} = action
      console.log(type, rest)
    }
    return next(action)
  }
}
