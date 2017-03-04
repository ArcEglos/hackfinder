import React, { PropTypes, Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
 } from 'react-native';

 const FBSDK = require('react-native-fbsdk');
 const {
   LoginButton,
   AccessToken
 } = FBSDK;

export default class FBLogin extends Component {

   static get defaultProps() {
     return {
       title: 'Facebook Login'
     };
   }

   render() {
     console.log("Test");
     return (
       <View style={styles.container}>
         <LoginButton
           publishPermissions={["publish_actions"]}
           onLoginFinished={
             (error, result) => {
               if (error) {
                 alert("login has error: " + result.error);
               } else if (result.isCancelled) {
                 alert("login is cancelled.");
               } else {
                 AccessToken.getCurrentAccessToken().then(
                   (data) => {
                     alert(data.accessToken.toString())
                   }
                 )
               }
             }
           }
           onLogoutFinished={() => alert("logout.")}/>
       </View>
     );
   }
 }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
