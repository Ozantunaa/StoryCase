import { FlatList, SafeAreaView, StyleSheet, Image, View, StatusBar, Dimensions } from 'react-native'
import { useState } from 'react'
import { Text } from 'react-native-animatable'


const width = Dimensions.get('screen').width

const Story = () => {
    const [images, setImages] = useState([
        (require('../assest/images/story1.png')),
        (require('../assest/images/story2.png')),
        (require('../assest/images/story3.png')),
        (require('../assest/images/story4.png')),
    ])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle={'light-content'}/>
            <FlatList
                data={images}
                horizontal
                pagingEnabled
                renderItem={({ item }) => (
                    <View>
                        <Image style={styles.image} source={item} />
                    </View>
                )}
            />
        </SafeAreaView>
    )
}

export default Story

const styles = StyleSheet.create({
    image: {
        width: width,
        height:'100%'
    }
})