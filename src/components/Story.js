import { useEffect, useRef, useState } from 'react';
import { FlatList, Platform, StyleSheet, Image, View, StatusBar, Dimensions, TextInput, Text, Pressable } from 'react-native'
import userdata from '../data/userdata'
import * as Progress from 'react-native-progress';

const width = Dimensions.get('screen').width

const Story = ({ openModal, setIsAllShown }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);

    const handleNext = () => {
        if (currentIndex < userdata.storyImages.length - 1) {
            setCurrentIndex(currentIndex + 1);
            flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
        } else {
            setIsAllShown(true);
            openModal()
        }
    };
    const handleBack = () => {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
          flatListRef.current.scrollToIndex({ index: currentIndex - 1 });
        }
      };

    useEffect(() => {
        const timer = setInterval(handleNext, 10000);
        return () => clearInterval(timer);
    }, [currentIndex]);


    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <Pressable onPress={handleBack} style={{left:0,bottom:0,position:'absolute',width:'50%', height:'90%',zIndex:1,flex:1}}></Pressable>
            <Pressable onPress={handleNext} style={{right:0,bottom:0,position:'absolute',width:'50%', height:'90%',zIndex:1,flex:1}}></Pressable>
            <FlatList
                ref={flatListRef}
                keyExtractor={(item, index) => index.toString()}
                data={userdata.storyImages}
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}
                renderItem={({ item, index }) => (
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
    container: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? width * 0.12 : 0
    },
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