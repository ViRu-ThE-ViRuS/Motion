import React, { Component } from 'react';

import {
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';

import { Icon } from 'react-native-elements';

export default class NavBarComponent extends Component {
    render() {
        return (
          <View style={styles.main}>
            <TouchableOpacity>
              <View style={styles.container}>
                <Icon
                    name="search"
                    type="ionicons"
                    size={25} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.container}>
                <Image style={styles.image} source={require('./../../screens/res/mlogo.png')} />
              </View>
            </TouchableOpacity>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
    },
    container: {
        marginRight: 10,
    },
    image: {
        height: 25,
        width: 25,
        borderRadius: 50,
        resizeMode: 'contain',
    },
});
