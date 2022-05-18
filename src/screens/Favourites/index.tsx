import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, SafeAreaView} from 'react-native';
import Favourite from './components/Favourite';
import {loadFavouritesList} from '../../api/favourites';

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

export default function Favourites() {
  const [favourites, setFavourites] = useState();

  const loadFavourites = async () => {
    try {
      const favourites = await loadFavouritesList();
      setFavourites(favourites?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadFavourites();
  }, [favourites]);

  const renderItem = ({item}: IProps) => <Favourite item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favourites}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 74.34,
  },
});
