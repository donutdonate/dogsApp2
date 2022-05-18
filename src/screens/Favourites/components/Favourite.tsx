import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {deleteFavourite} from '../../../api/favourites';

interface IProps {
  item: {
    name: string;
    temperament: string;
    id: number;
    image: {
      url: string;
      id: string;
    };
  };
}

export default function Favourite({item}: IProps) {
  const uri =
    'https://cdn4.iconfinder.com/data/icons/basic-interface-overcolor/512/trash_can-512.png';

  const favourite_id = item.id;

  const delFavourite = async () => {
    try {
      const result = await deleteFavourite(favourite_id.toString());
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => delFavourite()}
        style={styles.deleteOpacity}>
        <Image
          source={{
            uri: uri,
          }}
          style={styles.basket}
        />
      </TouchableOpacity>
      <Image source={{uri: item?.image.url}} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 318,
    height: 287.66,
    borderRadius: 16,
    marginBottom: 15,
  },
  deleteOpacity: {
    position: 'absolute',
    zIndex: 3,
    top: 5,
    right: 55,
  },
  basket: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
});
