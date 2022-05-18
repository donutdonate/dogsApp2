import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import BreedItem from './components/BreedItem';
import colors from '../../utils/colors';
import {getAllBreeds} from '../../api/breeds';

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

export default function BreedsList() {
  const [breeds, setBreeds] = useState();

  const loadData = async () => {
    const breeds = await getAllBreeds();
    const dogs = breeds.data;
    setBreeds(dogs);
  };

  useEffect(() => {
    loadData();
  }, []);

  const renderItem = ({item}: IProps) => <BreedItem item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={breeds}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 36,
    backgroundColor: colors.SCREEN_BACKGROUND,
  },
});
