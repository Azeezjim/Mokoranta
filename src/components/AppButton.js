import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

function AppButton({ title, onPress, color = 'primary', styling }) {
  return (
    <TouchableOpacity
      style={[styles.button, styling, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '90%',
    marginVertical: 10,
    alignSelf: 'center',
    height: 60,
    flexShrink: 0,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    // textTransform: "uppercase",
    fontWeight: 'bold',
  },
});

export default AppButton;
