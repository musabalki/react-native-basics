import React from "react"
import {StyleSheet,ScrollView, Image, Dimensions } from "react-native"

const Banner = ({news_banner_data}) => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
                news_banner_data.map((bannerNews) => <Image key={bannerNews.id} style={styles.banner_image} source={{ uri: bannerNews.imageUrl }} />)
            }
        </ScrollView>
    )
}
export default Banner 

const styles=StyleSheet.create({
    banner_image: {
        height: Dimensions.get('window').height / 4,
        width: Dimensions.get('window').width / 2,
    },
})