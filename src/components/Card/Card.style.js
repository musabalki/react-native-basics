import {StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
    },
    body: {
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 10,
        marginBottom: 3
    },
    text: {
        fontSize: 17,
        margin: 10,
        marginTop: 3
    },
    button_container: {
        backgroundColor: '#17c0eb',
        padding: 10,
        alignItems: "center",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    button_title: {
        fontWeight: "bold",
        color: 'white'
    }
})