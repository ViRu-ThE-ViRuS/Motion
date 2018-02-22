import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default class PrimaryFlatButton extends Component {
    render() {
        return (
          <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
            <View>
              <Text style={styles.text}>{this.props.text}</Text>
            </View>
          </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5C7D87',
    },
    text: {
        fontFamily: 'SourceSansPro_Regular',
        color: '#fff',
        fontSize: 15,
    },
});
