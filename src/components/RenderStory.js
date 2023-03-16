import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const width = Dimensions.get('screen').width;

const RenderStory = ({ item, userdata, onDismiss, currentIndex }) => {
    return (
        <>
            <View style={styles.headerContainer}>
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
    );
};

export default RenderStory

const styles = StyleSheet.create({
    headerContainer: {
        position: 'absolute',
        top: 10,
        zIndex: 1,
        flexDirection: 'column',
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
    image: {
        width: width,
        height: '100%',
        borderRadius: 8
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
});