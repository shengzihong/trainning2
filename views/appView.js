import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Dimensions from 'Dimensions';

let { height, width } = Dimensions.get('window');
let headerHeight = 44
let footerHeight = 48
let contentHeight = height - headerHeight - footerHeight - headerHeight - 5

export default class AppView extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={{
          height: headerHeight
        }}>
        </View>

        <View style={styles.header}>
          <Text style={styles.headerText}>
            标题栏
          </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.contentContainer}>
            <Image source={require('../images/00.jpg')} style={styles.imageStyle} />
          </View>
        </View>

        <View style={styles.footer}>

          <View style={styles.footerContainer}>

            <View style={styles.footerCell}>
              <Text style={styles.footerCellText}>
                探索
              </Text>
            </View>

            <View style={styles.footerCell}>
              <Text style={styles.footerCellText}>
                学习
              </Text>
            </View>

            <View style={styles.footerCell}>
              <Text style={styles.footerCellText}>
                进步
              </Text>
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
    backgroundColor: '#F5FCFF',
    paddingBottom: 50
  },

  header: {
    width: width,
    height: headerHeight,
    backgroundColor: '#3a84fc',
  },
  headerText: {
    fontSize: 20,
    marginTop: 18,
    textAlign: 'center'
  },

  content: {
    width: width,
    height: contentHeight
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: width/2,
    height: contentHeight/2
  },

  footer: {
    width: width,
    height: footerHeight,
    backgroundColor: '#3a84fc',
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  footerCell: {
    flex: 0.33,
    height: footerHeight,
    // borderWidth: 1
  },
  footerCellText: {
    fontSize: 20,
    marginTop: 13,
    textAlign: 'center'
  }

});
