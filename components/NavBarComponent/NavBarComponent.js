import React, { Component } from 'react';

import {
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import { Icon } from 'react-native-elements';

export default class NavBarComponent extends Component {
    render() {
        return (
          <TouchableOpacity>
            <View style={styles.container}>
              <Icon
                name="search"
                type="ionicons"
                size={25} />
            </View>
          </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginRight: 15,
    },
});
