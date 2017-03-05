import {GraphRequest, GraphRequestManager} from 'react-native-fbsdk'


export const REQUEST_FRIENDS_START = 'REQUEST_FRIENDS_START'

const requests = new GraphRequestManager()

export function requestFriends () {
  return (dispatch, {getState}) => {
    let account = getState().auth.account
    dispatch({type: REQUEST_FRIENDS_START})
    let request = new GraphRequest('/me/friends', null, (err, res) => {
      console.log(err, res)
    })
    requests.addRequest(request).start()
  }
}
