import React from 'react'
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native'
import axios from 'axios'

axios.defaults.headers.common['x-api-key'] = 'f850d84a-058f-4883-a993-62278d1e664f';

export default function Favourite({item}) {
    const favourite_id = item.id;
    const delFavourite = async () => {
        try {
            const result = axios.delete(`https://api.thedogapi.com/v1/favourites/${favourite_id}`)
            console.log(result)
        } catch(error) {
            console.log(error)
        }
    }
 return(
    <View style={styles.container}>
        <TouchableOpacity onPress={() => delFavourite()} style={{position: 'absolute', zIndex: 3, top: 5, right: 50}}>
            <Image source={{uri: 'https://cdn4.iconfinder.com/data/icons/basic-interface-overcolor/512/trash_can-512.png'}}
        style={{width: 30, height: 30, borderRadius: 20}}/>
        </TouchableOpacity>
        <Image source={{uri: item?.image.url}} style={styles.image}/>
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    image: {
        width: 318,
        height: 287.66,
        borderRadius: 16,
        marginBottom: 15
    }
})