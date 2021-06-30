import React from "react"
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from "react-native"
import Card from "./components/Card"


const App = () => {
    return (
        <SafeAreaView>
            <Card title="lorem 1" text="text 1" />
            <Card title="lorem 2" text="text 22" />
            <Card title="lorem 3" text="text 3" />
            <Card title="lorem 30" text="Text v" />
        </SafeAreaView>
    )
}

export default App;


