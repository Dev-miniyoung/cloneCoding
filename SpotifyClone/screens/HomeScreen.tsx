import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { API, graphqlOperation } from 'aws-amplify';

import AlbumCategory from '../components/AlbumCategory';
import albumCategories from '../data/albumCategories';
import { listAlbumCategorys } from '../src/graphql/queries';

const HomeScreen = () => {
  useEffect(() => {
    fetchAlbumCategories();
  }, []);

  const fetchAlbumCategories = async () => {
    try {
      const data = API.graphql(graphqlOperation(listAlbumCategorys));
      console.log('data', data);
    } catch (e) {
      console.log('e', e);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={albumCategories}
        renderItem={({ item }) => (
          <AlbumCategory
            title={item.title}
            albums={item.albums}
            keyExtractor={(item) => item.id}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default HomeScreen;
