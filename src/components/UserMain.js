import { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import Modal from 'react-native-modal'

import Story from './Story';

const UserMain = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={openModal} style={styles.pictureContainer}>
                <Image style={styles.profilePicture} resizeMode='contain' source={require('../assest/images/profile.png')} />
            </TouchableOpacity>
            <View style={styles.info}>
                <Text style={styles.number}>6956</Text>
                <Text style={styles.text}>Takipçi</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.number}>27,7m</Text>
                <Text style={styles.text}>Takip Ediyor</Text>
            </View>
            <Modal style={{ margin: 0, backgroundColor: 'black' }} isVisible={isModalVisible}>
                <Story />
            </Modal>
        </View>
    )
}

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
        borderColor: 'pink',
        borderRadius: 100,
        marginLeft: 16,
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
})