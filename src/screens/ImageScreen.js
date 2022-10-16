import { StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

function ImageScreen(props) {
  return (
    <View>
      <ImageDetail />
      <ImageDetail />
      <ImageDetail />
    </View>
  );
}

export default ImageScreen;

const styles = StyleSheet.create({});
