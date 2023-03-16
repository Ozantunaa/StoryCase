import { SafeAreaView, StatusBar, StyleSheet} from 'react-native'

import Header from '../components/Header'
import UserMain from '../components/UserMain'

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'default'}/>
            {/* Header */}
            <Header />
            {/* Main */}
            <UserMain />
        </SafeAreaView>
    );
};

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});