import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function BreedItem({item}) {
    const navigation = useNavigation();
    const url = item.image?.url;
    const name = item.name;
    const temperament = item.temperament;
    const id = item.id;
    const imageId = item.image?.id;
return (
    <TouchableOpacity style={styles.container} onPress={() =>
    {navigation.navigate('BreedDetail', {imageId, id, url, name, temperament})}}>
        <Image source={{uri: url}} style={styles.image}/>
        <View style={styles.text}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.temperament}>{temperament}</Text>
        </View>
    </TouchableOpacity>
);
}

const styles=StyleSheet.create({
    container:{
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 16,
        backgroundColor: '#F5F5FA',
        marginLeft: 25,
        marginRight: 23,
        marginTop: 25,
        shadowColor: '#d5fd54',
        borderColor: 'black',
        
    },
    image: {
        width: 130,
        borderRadius: 16,
        alignItems: 'stretch'
    },
    text: {
        paddingTop: 16,
        paddingLeft: 10,
        paddingRight: 150,
        paddingBottom: 16
    },
    name: {
        fontWeight: "700",
        fontSize: 20,
        lineHeight: 20,
        color: '#333333',
        marginBottom: 38
    },
    temperament: {
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 20,
        color: '#4F4F4F'
    }
})