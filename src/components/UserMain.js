import { useState } from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal'
import { useDispatch, useSelector } from 'react-redux';
import { setLastIndex } from '../store/storySlice';

import Story from './Story';

const UserMain = () => {
    const dispatch = useDispatch();
    const isAllShown = useSelector((state) => state.userdata.isAllShown);
    const currentIndex = useSelector((state) => state.userdata.currentIndex);

    const [isModalVisible, setModalVisible] = useState(false);

    const modalSettting = () => {
        setModalVisible(!isModalVisible);
    };

    const handleModalHide = () => {
        if (!isAllShown) {
            dispatch(setLastIndex(currentIndex));
        };
        setModalVisible(false)
    };

    return (
        <View style={styles.mainContainer}>
            <LinearGradient start={{x: 1, y: 0}} colors={['#8A3BEE', '#F200B7', '#FE9402']} style={{borderRadius:100,marginLeft:10}}>
                <Pressable onPress={modalSettting} style={[styles.pictureContainer, { borderColor: isAllShown ? 'lightgray' : 'transparent' }]}>
                    <Image style={styles.profilePicture} resizeMode='contain' source={require('../assest/images/profile.png')} />
                </Pressable>
            </LinearGradient>
            <View style={styles.info}>
                <Text style={styles.number}>6956</Text>
                <Text style={styles.text}>Takipçi</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.number}>27,7m</Text>
                <Text style={styles.text}>Takip Ediyor</Text>
            </View>
            <Modal style={{ margin: 0, backgroundColor: 'black' }} isVisible={isModalVisible}>
                <Story modalSettting={modalSettting} onDismiss={handleModalHide} />
            </Modal>
        </View>
    );
};

export default UserMain

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },

    profilePicture: {
        width: 86,
        height: 86,
    },
    pictureContainer: {
        borderWidth: 4,
        borderRadius: 100,
    },
    number: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 19,
        color: '#212121'
    },
    text: {
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 15,
        color: '#212121',
        marginTop: 3
    },
    info: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 26
    }
});
