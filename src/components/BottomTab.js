import { StyleSheet, View, Image } from 'react-native'

const bottomIcons = [
    require('../assest/images/home.png'),
    require('../assest/images/search.png'),
    require('../assest/images/reels.png'),
    require('../assest/images/darkheart.png'),
    require('../assest/images/smallprofile.png')
];

const BottomTab = () => {
    return (
        <View style={styles.container}>
            {bottomIcons.map((item, index) => (
                <Image resizeMode='contain' key={index} style={styles.image} source={item} />
            ))}
        </View>
    );
};

export default BottomTab

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        bottom: 24,
        position: 'absolute'
    },
    image: {
        width: 24,
        height: 24
    }
})