import React from 'react';
import { CameraRoll } from 'expo';
import { View, Text, StyleSheet, Image } from 'react-native';


// console.log('imageUri:', imageUri);
// {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
const Question = ({ question, imageUri }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{question}</Text>
    {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    {/* console.log('imageUri:', imageUri); */}
  </View>
  // console.log('imageUri:', imageUri);
);
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
  },
  image: {
    width: 100, // 画像の幅
    height: 100, // 画像の高さ
    marginBottom: 10, // テキストとの間隔
  },
});

export default Question;
