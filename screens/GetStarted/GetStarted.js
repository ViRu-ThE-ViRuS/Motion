import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import SvgUri from 'react-native-svg-uri';
import PrimaryFlatButton from './../../components/Button/PrimaryFlatButton';

import { NavigationActions } from 'react-navigation';

export default class GetStarted extends Component {

    static navigationOptions = {
        header: null
    }

    _startIntro() {
        this.props.navigation.navigate('intro');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.center}>
                    <SvgUri
                        source={require('./../res/motion_logo.svg')}
                        height="150"
                        width="150"
                    />
                    <Text style={styles.heading}>Motion</Text>
                    <Text style={styles.subHeading}>"create change"</Text>
                </View>
                <PrimaryFlatButton text="Get Started" onPress={() => this._startIntro()} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1
    },
    heading: {
        fontSize: 35,
        color: "#000",
        fontFamily: "SourceSansPro_Bold"
    },
    subHeading: {
        fontSize: 20,
        color: "#444",
        fontFamily: "SourceSansPro_Italic"
    },
    mainButton: {
        height: 50
    },
    center: {
        marginTop: 150,
        justifyContent: "center",
        alignItems: "center"
    }
})
