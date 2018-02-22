import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import SvgUri from 'react-native-svg-uri';

import PrimaryFlatButton from './../../components/Button/PrimaryFlatButton';

export default class Intro extends Component {
    static navigationOptions = {
        header: null,
    }

    startLogin() {
        this.props.navigation.navigate('login');

        // const resetAction = NavigationActions.reset({
        //     index: 0,
        //     actions: [
        //         NavigationActions.navigate({ routeName: 'intro' }),
        //     ],
        // });
        // this.props.navigation.dispatch(resetAction);
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
              <Text style={styles.subHeadingPrimary}>is a mobile platform that lets you create change in the world.</Text>
              <Text style={styles.subHeadingSecondary}>You can create movements, gather like minded people, and make the world a better place.</Text>
            </View>
            <PrimaryFlatButton text="Next" onPress={() => this.startLogin()} />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },
    heading: {
        fontSize: 35,
        color: '#000',
        fontFamily: 'SourceSansPro_Bold',
    },
    subHeadingPrimary: {
        fontSize: 20,
        color: '#222',
        fontFamily: 'SourceSansPro_Light',
        textAlign: 'center',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
    },
    subHeadingSecondary: {
        fontSize: 20,
        color: '#666',
        fontFamily: 'SourceSansPro_Light',
        textAlign: 'center',
        marginLeft: 15,
        marginTop: 15,
        marginRight: 15,
    },
    center: {
        marginTop: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
