import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Dimensions from 'Dimensions';

let { height, width } = Dimensions.get('window');

export default class NumberPad extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pad}>
          <View style={styles.padContainer}>

            <View style={styles.padRow}>

              <View style={styles.padCell}>
                <Text style={styles.padText}>
                  1
                </Text>
              </View>

              <View style={styles.padCell}>
                <Text style={styles.padText}>
                  2
                </Text>
              </View>

              <View style={styles.padCell}>
                <Text style={styles.padText}>
                  3
                </Text>
              </View>

            </View>

            <View style={styles.padRow}>
              
              <View style={styles.padCell}>
                <Text style={styles.padText}>
                  4
                </Text>
              </View>

              <View style={styles.padCell}>
                <Text style={styles.padText}>
                  5
                </Text>
              </View>

              <View style={styles.padCell}>
                <Text style={styles.padText}>
                  6
                </Text>
              </View>

            </View>

            <View style={styles.padRow}>

              <View style={styles.padCell}>
                <Text style={styles.padText}>
                  7
                </Text>
              </View>

              <View style={styles.padCell}>
                <Text style={styles.padText}>
                  8
                </Text>
              </View>

              <View style={styles.padCell}>
                <Text style={styles.padText}>
                  9
                </Text>

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
    backgroundColor: '#F5FCFF'
  },

  pad: {
    width: width*0.8,
    height: width*0.8,
    borderWidth: 1,
    backgroundColor: '#474c54'
  },

  padContainer: {
    flex: 1
  },

  padRow: {
    flex: 0.333,
    flexDirection: 'row',
  },

  padCell: {
    flex: 0.33,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8f959e'
  },

  padText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#0345af'
  }

});
