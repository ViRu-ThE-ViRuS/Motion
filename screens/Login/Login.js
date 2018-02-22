import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import SvgUri from 'react-native-svg-uri';
import { FacebookLoginButton, GoogleLoginButton, EmailLoginButton } from './../../components/Button/LoginButton';

export default class Login extends Component {
    static navigationOptions = {
        header: null,
    }

<<<<<<< HEAD
=======
    navigateToMain() {
        // this.props.navigation.dispatch(NavigationActions.reset({
        //     index: 0,
        //     actions: [
        //         NavigationActions.navigate({ routeName: 'main' }),
        //     ],
        // }));
        this.props.navigation.navigate('main');
    }

>>>>>>> 3d345e2... Add basic template for Main screen.
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.center}>
              <SvgUri
                        source={require('./../res/motion_logo.svg')}
                        height="150"
                        width="150"
                    />
              <Text style={styles.subHeadingPrimary}>Login With:</Text>
            </View>

            <View style={styles.buttons}>
              <FacebookLoginButton style={styles.mainButton} />
              <GoogleLoginButton style={styles.mainButton} />
              <EmailLoginButton style={styles.mainButton} />
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
});
