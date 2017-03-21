import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Button,
  Alert
} from 'react-native';

import Dimensions from 'Dimensions';

let { height, width } = Dimensions.get('window');

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.login}>

          <View style={styles.loginImage}>
            <Image
              source={require('../images/00.jpg')}
              style={styles.image}
            />
          </View>

          <View style={styles.loginUsername}>
            <TextInput
              style={styles.loginUsernameTextInput}
              placeholder='请输入用户名'
              autoCaptialize={'none'}
              autoCorrect={false}
              keyboardType={'default'}
            />
          </View>

          <View style={styles.loginPassword}>
            <TextInput
              style={styles.loginPasswordTextInput}
              placeholder='请输入密码'
              autoCaptialize={'none'}
              autoCorrect={false}
              keyboardType={'default'}
              secureTextEntry={true}
            />
          </View>

          <View style={styles.loginSubmit}>
            <View style={styles.loginSubmitButton}>
              <Button
                onPress={() => { Alert.alert('提示', '别点我啦') }}
                title='登录'
                color='#000000'
              />
            </View>
          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },

  login: {
    width: width*0.9,
    height: height*0.5,
    marginBottom: 100
  },

  loginImage: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 80,
    height: 80,
    borderWidth: 1
  },

  loginUsername: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  loginUsernameTextInput: {
    height: 40,
    width: width*0.6,
    padding: 5,
    color: '#666',
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 4,
    textAlign: 'center'
  },

  loginPassword: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  loginPasswordTextInput: {
    height: 40,
    width: width*0.6,
    padding: 5,
    color: '#666',
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 4,
    textAlign: 'center'
  },

  loginSubmit: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  loginSubmitButton: {
    borderWidth: 1,
    backgroundColor: '#b9c1ce',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 1.0
  }

});
