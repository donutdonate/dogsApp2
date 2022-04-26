import axios from 'axios';
import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import Button from './components/Button'
import { useNavigation } from '@react-navigation/native';

export default function BreedDetail({route}) {
const [url, setUrl] = useState(route.params.url);
const [name, setName] = useState(route.params.name);
const [temperament, setTemperament] = useState(route.params.temperament)
const breed_id = route.params.id;
const [imageId, setImageId] = useState(route.params.imageId)
axios.defaults.headers.common['x-api-key'] = 'f850d84a-058f-4883-a993-62278d1e664f';

const loadImage = async () => {
    const breed = await axios.get(`https://api.thedogapi.com/v1/images/search?breed_id=${breed_id}&include_breeds=false`)
    setUrl(breed.data[0]?.url);
    setImageId(breed.data[0]?.id)
}

const saveToFavourite = async () => {
    try {
        const result = await axios.post("https://api.thedogapi.com/v1/favourites", {
            image_id: imageId
        });
        console.log(result);
    } catch(error) {
        console.log(error);
    }
}

const navigation = useNavigation();
    return (
<SafeAreaView style={styles.container}>
    <TouchableOpacity style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Image source={require('../../assets/arrow.png')}/>
    </TouchableOpacity>
    <View style={{alignItems: 'center'}}>
        <Image source={{uri: url}} style={styles.image}/>
    </View>
    <View style={styles.text}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.temperament}>{temperament}</Text>
    </View>
    <View style={styles.buttons}>
        <Button title='Другое фото' pressFunction={loadImage}/>
        <Button title='Добавить в избранное' pressFunction={saveToFavourite}/>
    </View>
</SafeAreaView>
);
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 25,
        paddingRight: 32,
        paddingTop: 142.34,
        backgroundColor: '#F5F5FA'
    },
    backArrow: {
        position: 'absolute',
        top: 71,
        left: 25,
        width: 44,
        height: 44,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22
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
        color: '#4F4F4F',
        marginBottom: 46
    },
    buttons: {
        flexDirection: 'row',
        paddingRight: 10,
        paddingLeft: 8,
        justifyContent: 'center',
    }
})