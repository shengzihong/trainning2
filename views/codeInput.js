import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Dimensions from 'Dimensions';

let { height, width } = Dimensions.get('window');

export default class CodeInput extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.codeInput}>

          <View style={styles.codeInputContainer}>

            <View style={styles.codeInputHead}>
              <Text style={styles.codeInputText}>
                请输入六位交易密码
              </Text>
            </View>

            <View style={styles.codeInputEnter}>
              <View style={styles.codeInputRow}>

                <View style={styles.codeInputCell}>
                </View>

                <View style={styles.codeInputCell}>
                </View>

                <View style={styles.codeInputCell}>
                </View>

                <View style={styles.codeInputCell}>
                </View>

                <View style={styles.codeInputCell}>
                </View>

                <View style={styles.codeInputCell}>
                </View>

              </View>
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
    backgroundColor: '#4c4f54'
  },

  codeInput: {
    width: width*0.75,
    height: height*0.3,
    backgroundColor: '#ffffff',
    borderRadius: 20
  },

  codeInputContainer: {
    flex: 1,
    margin: 10
  },

  codeInputHead: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  codeInputText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center'
  },

  codeInputEnter: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  codeInputRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20
  },

  codeInputCell: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#7b7e7f'
  }

});
