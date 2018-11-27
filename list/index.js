/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import SplashScreen from "rn-splash-screen";


export default class List extends Component {

  state = {
    isLoading: true
  }

  componentDidMount() {

    setTimeout(() => {
      this.setState({isLoading: false});
    }, 5000);
  }

  componentDidUpdate() {
    if (!this.state.isLoading) {
      // Hide splash screen
      SplashScreen.hide();
    }
  }


  render() {
    if (this.state.isLoading) return null;
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
          <Button title="react-native-actionsheet" onPress={() => {
              navigation.navigate('Actionsheet', {title: 'ReactNativeActionsheet'})
          }}/>
          <Button title="antd-mobile-rn" onPress={() => {
              navigation.navigate('AntdMobile', {title: 'AntdMobileRn'})
          }}/>
          <Button title="react-native-fs" onPress={() => {
              navigation.navigate('Fs', {title: 'ReactNativeFs'})
          }}/>
          <Button title="react-native-image-pickers" onPress={() => {
              navigation.navigate('ReactNativeImagePicker', {title: 'ReactNativeImagePicker'})
          }}/>
          <Button title="react-native-image-zoom-viewer" onPress={() => {
              navigation.navigate('ReactNativeImageZoomViewer', {title: 'ReactNativeImageZoomViewer'})
          }}/>
          <Button title="react-native-swiper" onPress={() => {
              navigation.navigate('ReactNativeSwiper', {title: 'ReactNativeSwiper'})
          }}/>
          <Button title="pointer-events" onPress={() => {
              navigation.navigate('PointerEvents', {title: 'PointerEvents'})
          }}/>          
          <Button title="react-native-wechat" onPress={() => {
              navigation.navigate('ReactNativeWechat', {title: 'ReactNativeWechat'})
          }}/>
          <Button title="signature-capturet" onPress={() => {
              navigation.navigate('SignatureCapture', {title: 'SignatureCapture'})
          }}/>
          <Button title="scrollable-tab-view" onPress={() => {
              navigation.navigate('ScrollableTabView', {title: 'ScrollableTabView'})
          }}/>
          <Button title="react-native-refresh-list-view" onPress={() => {
              navigation.navigate('Refreshlist', {title: 'Refreshlist'})
          }}/>
          <Button title="qr-code-scanner" onPress={() => {
              navigation.navigate('QRCodeScanner', {title: 'QRCodeScanner'})
          }}/>
          <Button title="react-native-picker" onPress={() => {
              navigation.navigate('ReactNativePicker', {title: 'ReactNativePicker'})
          }}/>
          <Button title="react-native-image-crop-picker" onPress={() => {
              navigation.navigate('ImageCropPicker', {title: 'ImageCropPicker'})
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingTop: 40
  }
});
