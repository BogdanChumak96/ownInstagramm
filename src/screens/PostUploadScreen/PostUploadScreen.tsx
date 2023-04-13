import {View, Text, StyleSheet, Linking} from 'react-native';
import React, {useEffect} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const PostUploadScreen = () => {
  useEffect(() => {
    async function getPermission() {
      const cameraPermission = await Camera.getCameraPermissionStatus();
      if (cameraPermission == 'denied') await Linking.openSettings();
    }
    getPermission();
  }, []);
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;

  if (device == null)
    return (
      <View>
        <Text>null device</Text>
      </View>
    );
  return (
    <View>
      <Text>Find camera</Text>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
    </View>
  );
};

export default PostUploadScreen;
