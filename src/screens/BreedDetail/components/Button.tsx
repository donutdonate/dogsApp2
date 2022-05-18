import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import colors from '../../../utils/colors';

interface IProps {
  title: string;
  pressFunction: () => void;
}

export default function Button({title, pressFunction}: IProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        pressFunction();
      }}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    backgroundColor: colors.BUTTON_BACKGROUND,
    paddingTop: 10,
    paddingBottom: 11,
    paddingLeft: 15,
    paddingRight: 17,
    marginRight: 14,
  },
  title: {
    color: colors.BUTTON_TITLE,
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 19.12,
  },
});
