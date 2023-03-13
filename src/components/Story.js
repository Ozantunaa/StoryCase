import { FlatList, SafeAreaView, StyleSheet, Image, View, StatusBar, Dimensions, TextInput, Text, Pressable } from 'react-native'
import userdata from '../data/userdata'

const width = Dimensions.get('screen').width

const Story = ({ openModal }) => {

    return (
        <View style={{ flex: 1, marginTop: 50 }}>
            <StatusBar barStyle={'light-content'} />
            <FlatList
                data={userdata.storyImages}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                renderItem={({ item }) => (
                    <>
                        <View style={styles.storyHeader}>
                            <View style={styles.listRow}>
                                <Image style={styles.profileImage} source={userdata.profileImage} />
                                <Text style={styles.text}>{userdata.username}</Text>
                                <Text style={styles.time}>3h</Text>
                            </View>
                            <View style={styles.closeModal}>
                                <Text style={styles.dots}>...</Text>
                                <Pressable onPress={openModal}>
                                    <Text style={styles.close}>X</Text>
                                </Pressable>
                            </View>
                        </View>
                        <Image style={styles.image} source={item} />
                    </>
                )}
            />
            <View style={styles.bottomContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Yorum yap'
                    placeholderTextColor='white'
                />
                <Image style={styles.heart} source={require('../assest/images/heart.png')} />
                <Image style={styles.send} source={require('../assest/images/send.png')} />

            </View>
        </View>
    )
}

export default Story

const styles = StyleSheet.create({
    image: {
        width: width,
        height: '100%',
        borderRadius: 8
    },
    storyHeader: {
        position: 'absolute',
        top: 10,
        zIndex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width,
    },
    profileImage: {
        width: 32,
        height: 32,
        marginLeft: 8
    },
    listRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 14,
        fontWeight: '400',
        marginHorizontal: 8
    },
    time: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500',
        opacity: 0.6
    },
    closeModal: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottomContainer: {
        backgroundColor: 'black',
        paddingVertical: 24,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    input: {
        borderColor: '#9A9A9A',
        borderWidth: 1,
        padding: 12,
        borderRadius: 20,
        flex: 1
    },
    heart: {
        marginHorizontal: 16
    },
    close: {
        fontSize: 26,
        marginRight: 16,
        fontWeight: '400',
        color: 'white',
    },
    dots: {
        fontSize: 26,
        marginRight: 8,
        fontWeight: '400',
        color: 'white'
    }
})