import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    BackHandler,
} from 'react-native';

import NavBarComponent from './../../../components/NavBarComponent/NavBarComponent';

export default class GlobalFeed extends Component {
    static navigationOptions = {
        title: 'Global Feed',
        headerRight: (<NavBarComponent />),
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', () => this.props.navigation.navigate('local'));
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', BackHandler.exitApp);
    }

    render() {
        return (
          <View style={styles.container}>
            <Text>
                    Global
            </Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
});
