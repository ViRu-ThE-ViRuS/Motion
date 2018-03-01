import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    BackHandler,
} from 'react-native';


import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ICON from 'react-native-vector-icons/MaterialCommunityIcons';
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

    createMotionScreen() {
        this.props.navigation.navigate('createMotion');
    }

    render() {
        return (
          <View style={styles.container}>
            <Text>
                    Bookmarks
            </Text>

            <ActionButton buttonColor="#5C7D87">
              <ActionButton.Item buttonColor="#02c3bd" title="Settings">
                <Icon name="settings" style={styles.actionButtonIcon} />
              </ActionButton.Item>
              <ActionButton.Item buttonColor="#1abc9c" title="Filter">
                <ICON name="filter" style={styles.actionButtonIcon} />
              </ActionButton.Item>
              <ActionButton.Item buttonColor="#1b998b" title="Create Motion" onPress={() => this.createMotionScreen()}>
                <Icon name="add" style={styles.actionButtonIcon} />
              </ActionButton.Item>
            </ActionButton>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});
