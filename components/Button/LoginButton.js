import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

class LoginButton extends Component {
    constructor(props, bgc = "#fff") {
        super(props);
        this.type = "Login";
        this.styles = StyleSheet.create({
            container: {
                height: 50,
                alignSelf: "stretch",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: bgc,
                marginBottom: 10,
                marginLeft: 10,
                marginRight: 10
            },
            text: {
                fontFamily: "SourceSansPro_Regular",
                color: "#fff",
                fontSize: 15
            }
        })
    }


    render() {
        return (
            <TouchableOpacity style={this.styles.container} onPress={this.props.onPress}>
                <View>
                    <Text style={this.styles.text}>{this.type}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export class FacebookLoginButton extends LoginButton {
    constructor(props) {
        super(props, "#3b5998");
        this.type = "Facebook";
    }
}

export class GoogleLoginButton extends LoginButton {
    constructor(props) {
        super(props, "#d34836");
        this.type = "Google";
    }
}

export class EmailLoginButton extends LoginButton {
    constructor(props) {
        super(props, "#5C7D87");
        this.type = "Email";
    }
}
