import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';



const Option = ({ option, onSelect }) => {

  return (
    <TouchableOpacity style={styles.option} onPress={onSelect}>
      <Text style={styles.text}>{option}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    alignItems: 'center', // 画像とテキストを中央に配置
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },

});

export default Option;
