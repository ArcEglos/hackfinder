export const SERVER_AUTH_START = 'SERVER_AUTH_START'
export const SERVER_AUTH_END = 'SERVER_AUTH_END'
export const UPDATE_POINTS_START = 'UPDATE_POINTS_START'
export const UPDATE_POINTS_END = 'UPDATE_POINTS_END'

export function startServerAuth (userId, accessToken) {
  console.log(userId, accessToken)
  return (dispatch, {api}) => {
    dispatch({type: SERVER_AUTH_START})
    api.post('/account', {
      body: {
        userId,
        accessToken
      }
    })
    .then(res => {
      dispatch({type: SERVER_AUTH_END, account: res.body})
    }, console.error)
  }
}

export function updatePoints(userId, actions) {
  console.log(userId, actions)
  return (dispatch, {api}) => {
    dispatch({type: UPDATE_POINTS_START})
    api.put('/account', {
      body: {
        userId,
        actions
      }
    })
    .then(res => {
      dispatch({ type: UPDATE_POINTS_END, points: res.body.newPoints })
    }, console.error)
  }
}
