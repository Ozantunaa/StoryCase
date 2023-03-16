import { useCallback, useRef,useEffect } from 'react';
import { FlatList, Platform, StyleSheet, Image, View, StatusBar, Dimensions, TextInput, Pressable } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { setCurrentIndex, setIsAllShown, setLastIndex, setViewedStory } from '../store/storySlice';

import RenderStory from './RenderStory';

const width = Dimensions.get('screen').width;

const Story = ({ modalSettting, onDismiss }) => {
    const dispatch = useDispatch();
    const flatListRef = useRef(null);

    const userdata = useSelector((state) => state.userdata.userdata);
    const currentIndex = useSelector((state) => state.userdata.currentIndex);
    const lastIndex = useSelector((state) => state.userdata.lastIndex);
    
    const handleNext = () => {
        if (currentIndex < userdata.storyImages.length - 1) {
            dispatch(setCurrentIndex(currentIndex + 1));
            dispatch(setViewedStory(currentIndex))
            flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
        } else {
            dispatch(setIsAllShown(true));
            dispatch(setLastIndex(currentIndex));
            dispatch(setViewedStory(currentIndex))
            modalSettting();
        };
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            dispatch(setCurrentIndex(currentIndex - 1));
            flatListRef.current.scrollToIndex({ index: currentIndex - 1 });
        };
    };
    /* Auto Scroll Story if you need */

    /*  useEffect(() => {
         const timer = setInterval(handleNext, 5000);
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
                    <RenderStory
                        item={item}
                        currentIndex={currentIndex}
                        userdata={userdata}
                        onDismiss={onDismiss} />
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
        flex: 1,
        color: 'white'
    },
    heart: {
        marginHorizontal: 16
    },

    back: {
        left: 0, marginTop: width / 7, position: 'absolute',
        width: '50%', height: '84%', zIndex: 1,
    },
    next: {
        right: 0, marginTop: width / 7, position: 'absolute',
        width: '50%', height: '84%', zIndex: 1,
    }
})