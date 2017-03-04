export const FETCH_BUZZES_START = 'FETCH_BUZZES_START'
export const FETCH_BUZZES_END = 'FETCH_BUZZES_END'

export function fetchBuzzes () {
  return (dispatch, {api}) => {
    dispatch({type: FETCH_BUZZES_START})
    api.get('/buzz').then(res => {
      dispatch({type: FETCH_BUZZES_END, items: res.body})
    })
  }
}
