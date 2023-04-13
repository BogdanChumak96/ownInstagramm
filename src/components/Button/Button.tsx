import {Pressable, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../theme/colors';
import fonts from '../../theme/fonts';

interface IButton {
  title?: string;
  onPress?: () => void;
}

const Button = ({title, onPress = () => {}}: IButton) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    alignItems: 'center',
    padding: 5,
  },
  text: {
    color: colors.black,
    fontWeight: fonts.weight.semi,
  },
});

export default Button;
