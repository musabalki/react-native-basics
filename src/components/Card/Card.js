import React from "react"
import { View, Text, TouchableOpacity,Alert } from "react-native"
import styles from './Card.style'

const Card = ({title,text}) => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>{text}</Text>
            </View>
            <TouchableOpacity onPress={()=>Alert.alert(title)} style={styles.button_container}>
                <Text style={styles.button_title}>I liked</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Card