import { useCallback, useEffect, useRef } from 'react';
import { FlatList, Platform, StyleSheet, Image, View, StatusBar, Dimensions, TextInput, Text, Pressable, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { setCurrentIndex, setIsAllShown, setLastIndex } from '../store/storySlice';

const width = Dimensions.get('screen').width

const Story = ({ modalSettting, onDismiss }) => {
    const dispatch = useDispatch();
    const flatListRef = useRef(null);

    const userdata = useSelector((state) => state.userdata.userdata);
    const currentIndex = useSelector((state) => state.userdata.currentIndex);
    const lastIndex = useSelector((state) => state.userdata.lastIndex);

    const handleNext = () => {
        if (currentIndex < userdata.storyImages.length - 1) {
            dispatch(setCurrentIndex(currentIndex + 1));
            flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
        } else {
            dispatch(setIsAllShown(true));
            dispatch(setLastIndex(currentIndex));
            modalSettting();
        }
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            dispatch(setCurrentIndex(currentIndex - 1));
            flatListRef.current.scrollToIndex({ index: currentIndex - 1 });
        }
    };

    /*  useEffect(() => {
         const timer = setInterval(handleNext, 2000);
         return () => clearInterval(timer);
     }, [currentIndex]); */

    const getItemLayout = useCallback((_, index) => ({
        length: width, offset: width * index, index
    }), []);

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <Pressable onPress={handleBack} style={styles.back}></Pressable>
            <Pressable onPress={handleNext} style={styles.next}></Pressable>
            <FlatList
                ref={flatListRef}
                keyExtractor={(item, index) => index.toString()}
                data={userdata.storyImages}
                horizontal
                initialScrollIndex={lastIndex}
                getItemLayout={getItemLayout}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}
                renderItem={({ item }) => (
                    <>
                        <View style={styles.headerConatiner}>
                            <View style={styles.lineContainer}>
                                {userdata.storyImages.map((_, i) => (
                                    <View
                                        key={i}
                                        style={[
                                            styles.line,
                                            { backgroundColor: i <= currentIndex ? '#FFCC00' : 'white' },
                                        ]}
                                    />
                                ))}
                            </View>
                            <View style={styles.storyHeader}>
                                <View style={styles.listRow}>
                                    <Image style={styles.profileImage} source={userdata.profileImage} />
                                    <Text style={styles.text}>{userdata.username}</Text>
                                    <Text style={styles.time}>3h</Text>
                                </View>
                                <View style={styles.closeModal}>
                                    <Text style={styles.dots}>...</Text>
                                    <TouchableOpacity onPress={onDismiss}>
                                        <Text style={styles.close}>X</Text>
                                    </TouchableOpacity>
                                </View>
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
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    line: {
        width: width / 4.4,
        height: 2,
        borderRadius: 10,
        marginHorizontal: 4,

    },
    headerConatiner: {
        position: 'absolute',
        top: 10,
        zIndex: 1,
        flexDirection: 'column',

    },
    storyHeader: {
        marginTop: 10,
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
    },
    back: {
       left:0, marginTop: width / 7, position: 'absolute',
        width: '50%', height: '84%', zIndex: 1,
    },
    next: {
        right: 0, marginTop: width / 7, position: 'absolute',
        width: '50%', height: '84%', zIndex: 1, 
    }
})