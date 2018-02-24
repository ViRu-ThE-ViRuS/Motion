import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';

import { FacebookLoginButton, GoogleLoginButton, EmailLoginButton } from './../../components/Button/LoginButton';

export default class Login extends Component {
    static navigationOptions = {
        header: null,
    }

    navigateToMain() {
        this.props.navigation.navigate('main');
    }

    render() {
        return (
          <View style={styles.container}>
            <View style={styles.center}>
              <Image
                        source={require('./../res/mlogo.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
              <Text style={styles.subHeadingPrimary}>Login With:</Text>
            </View>

            <View style={styles.buttons}>
              <FacebookLoginButton style={styles.mainButton} onPress={() => this.navigateToMain()} />
              <GoogleLoginButton style={styles.mainButton} onPress={() => this.navigateToMain()} />
              <EmailLoginButton style={styles.mainButton} onPress={() => this.navigateToMain()} />
            </View>
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
    subHeadingPrimary: {
        fontSize: 20,
        color: '#222',
        fontFamily: 'SourceSansPro_Light',
        textAlign: 'center',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
    },
    buttons: {
        alignSelf: 'stretch',
        marginBottom: 45,
    },
    center: {
        marginTop: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 150,
        width: 150,
    },
});
