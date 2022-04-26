import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function Button({title, pressFunction}) {
   
    return(
        <TouchableOpacity style={styles.button} onPress={() => {pressFunction()}}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 12,
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 11,
        paddingLeft: 15,
        paddingRight: 17,
        marginRight: 14,
    },
    title: {
        color: '#5533EA',
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 19.12
    }
})