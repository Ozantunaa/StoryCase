import { StyleSheet, Text, View, Image } from 'react-native'
import { useSelector } from 'react-redux'

const Header = () => {
    const userdata = useSelector((state) => state.userdata.userdata)
    return (
        <View style={styles.header}>
            <Text style={styles.profileName}>{userdata.username}</Text>
            <View style={styles.tickContainer}>
                <Image style={styles.star} source={require('../assest/images/star.png')} />
                <Image style={styles.tick} source={(require('../assest/images/tick.png'))} />
            </View>
        </View>
    );
};

export default Header

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    profileName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#212121'
    },
    tickContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 4
    },
    tick: {
        position: 'absolute'
    },
    star: {
        width: 13,
        height: 13
    },
});