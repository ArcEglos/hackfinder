export const SERVER_AUTH_START = 'SERVER_AUTH_START'
export const SERVER_AUTH_END = 'SERVER_AUTH_END'

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
