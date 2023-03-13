import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.profileName}>Revy</Text>
                <View style={styles.tickContainer}>
                    <Image style={styles.star} source={require('../assest/images/star.png')} />
                    <Image style={styles.tick} source={(require('../assest/images/tick.png'))} />
                </View>
            </View>
            {/* Main */}
            <View style={styles.mainContainer}>
                <View style={styles.pictureContainer}>
                    <Image style={styles.profilePicture} source={require('../assest/images/profile.png')} />
                </View>
                <View style={styles.info}>
                    <Text style={styles.number}>6956</Text>
                    <Text style={styles.text}>Takipçi</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.number}>27,7m</Text>
                    <Text style={styles.text}>Takip Ediyor</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    profileName: {
        fontSize: 16,
        fontWeight: '600',
        color:'#212121'
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
    mainContainer: {
        alignItems: 'center',
        flexDirection: 'row',

    },
    profilePicture: {
        width: 86,
        height: 86,

    },
    pictureContainer: {
        padding: 4,
        borderColor: 'red',
        borderRadius: 100,
        backgroundColor: 'pink',
        marginLeft: 16,
        overflow: 'hidden'
    },
    number: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 19,
        color:'#212121'
    },
    text: {
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 15,
        color:'#212121',
        marginTop:3
    },
    info: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 26
    }
})