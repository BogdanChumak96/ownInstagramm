import {Text, StyleSheet, View, Pressable} from 'react-native';
import React, {Component} from 'react';

interface IDoublePressable {
  onDoublePress?: () => void;
  children: JSX.Element;
}

export const DoublePressable = ({
  onDoublePress = () => {},
  children,
}: IDoublePressable) => {
  let lastTap = 0;

  const handleDoublePress = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      onDoublePress();
    }

    lastTap = now;
  };
  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
};
