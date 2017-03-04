import React, { PropTypes, Component } from 'react';
var {FBLogin, FBLoginManager} = require('react-native-facebook-login');
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
 } from 'react-native';

var {FBLoginManager} = require('react-native-facebook-login');

FBLoginManager.setLoginBehavior(FBLoginManager.LoginBehaviors.Web); // defaults to Native

FBLoginManager.loginWithPermissions(["email","user_friends"], function(error, data){
  if (!error) {
    console.log("Login data: ", data);
  } else {
    console.log("Error: ", error);
  }
})
