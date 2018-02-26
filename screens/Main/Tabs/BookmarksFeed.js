import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    BackHandler,
} from 'react-native';

import NavBarComponent from './../../../components/NavBarComponent/NavBarComponent';

export default class BookmarksFeed extends Component {
    static navigationOptions = {
        title: 'Bookmarks',
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
                    Bookmarks
            </Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
});
