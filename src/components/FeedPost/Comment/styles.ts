import {StyleSheet} from 'react-native';
import { colors } from '../../../theme/colors';
import fonts from '../../../theme/fonts';

export const styles = StyleSheet.create({
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    color: colors.black,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  icon: {
    marginHorizontal: 5,
  },
});
