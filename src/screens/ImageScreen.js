import { StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';
import beach from '../../assets/images/beach.jpg';
import mountain from '../../assets/images/mountain.jpg';
import forest from '../../assets/images/forest.jpg';

function ImageScreen(props) {
  return (
    <View>
      <ImageDetail title="Forest" image={forest} score={7} />
      <ImageDetail title="Beach" image={beach} score={9} />
      <ImageDetail title="Mountain" image={mountain} score={5} />
    </View>
  );
}

export default ImageScreen;

const styles = StyleSheet.create({});
