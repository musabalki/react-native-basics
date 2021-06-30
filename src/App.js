import React from "react"
import { View, Text, SafeAreaView, StyleSheet, FlatList, ScrollView, Image, Dimensions } from "react-native"
import news_data from "./news_data.json"
import news_banner_data from "./news_banner_data.json"
import NewsCard from "./components/NewsCard"
import Banner from "./components/Banner"

const App = () => {
    const renderNews = ({ item }) => {
        return <NewsCard key={item.u_id} news={item} />
    }
    const renderKey = (item) => {
        return item.u_id.toString()
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header_text}>News App</Text>
            <FlatList ListHeaderComponent={() =><Banner news_banner_data={news_banner_data}  /> }
                keyExtractor={renderKey}
                data={news_data}
                renderItem={renderNews}
            />
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#dcdcdc" },
    header_text:{
        fontWeight:"bold",
        fontSize:50,
        textAlign:"center"
    }

})
