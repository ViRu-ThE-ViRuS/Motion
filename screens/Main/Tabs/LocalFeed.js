import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    BackHandler,
} from 'react-native';

export default class LocalFeed extends Component {
    static navigationOptions = {
        header: null,
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', BackHandler.exitApp);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', BackHandler.exitApp);
    }

    render() {
        return (
          <View style={styles.container}>
            <Text>
                    Local
            </Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
});
