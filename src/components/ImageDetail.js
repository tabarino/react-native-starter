import { Text, StyleSheet, View, Image } from 'react-native';

function ImageDetail({ title, image, score }) {
  return (
    <View>
      <Image source={image} />
      <Text>{title}</Text>
      <Text>Image Score: {score}</Text>
    </View>
  );
}

export default ImageDetail;

const styles = StyleSheet.create({});
