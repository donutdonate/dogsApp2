import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import Button from './components/Button';
import {useNavigation} from '@react-navigation/native';
import {Shadow} from 'react-native-shadow-2';
import colors from '../../utils/colors';
import {getRandImage} from '../../api/breeds';
import {addToFavourite} from '../../api/favourites';

interface IProps {
  route: {
    params: {
      url: string;
      name: string;
      temperament: string;
      id: number;
      imageId: string;
    };
  };
}

export default function BreedDetail({route}: IProps) {
  const [url, setUrl] = useState(route.params.url);
  const [name, setName] = useState(route.params.name);
  const [temperament, setTemperament] = useState(route.params.temperament);
  const breed_id = route.params.id;
  const [imageId, setImageId] = useState(route.params.imageId);
  const arrow = require('../../../assets/arrow.png');

  const loadImage = async () => {
    const breed = await getRandImage(breed_id);
    setUrl(breed.data[0]?.url);
    setImageId(breed.data[0]?.id);
  };

  const saveToFavourite = async () => {
    try {
      const result = await addToFavourite({image_id: imageId});
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backArrow}
        onPress={() => navigation.goBack()}>
        <Image source={arrow} />
      </TouchableOpacity>
      <Shadow
        distance={10}
        startColor={colors.SHADOW_START}
        finalColor={colors.SHADOW_END}
        offset={[15, 15]}
        sides={['bottom', 'right', 'left', 'top']}
        corners={['bottomRight', 'bottomLeft', 'topRight', 'topLeft']}
        radius={16}>
        <View style={{alignItems: 'center'}}>
          <Image source={{uri: url}} style={styles.image} />
        </View>
      </Shadow>
      <View style={styles.text}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.temperament}>{temperament}</Text>
      </View>
      <View style={styles.buttons}>
        <Button title="Другое фото" pressFunction={loadImage} />
        <Button title="Добавить в избранное" pressFunction={saveToFavourite} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 25,
    paddingRight: 32,
    paddingTop: 142.34,
    backgroundColor: colors.SCREEN_BACKGROUND,
  },
  backArrow: {
    position: 'absolute',
    top: 71,
    left: 25,
    width: 44,
    height: 44,
    backgroundColor: colors.ARROW_BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
  },
  image: {
    width: 350,
    height: 287.66,
    borderRadius: 16,
  },
  text: {
    paddingTop: 43,
    paddingLeft: 6,
  },
  name: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 20,
    color: colors.BREED_NAME,
    marginBottom: 38,
  },
  temperament: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: colors.BREED_TEMPERAMENT,
    marginBottom: 46,
  },
  buttons: {
    flexDirection: 'row',
    paddingRight: 10,
    paddingLeft: 8,
    justifyContent: 'center',
  },
});
