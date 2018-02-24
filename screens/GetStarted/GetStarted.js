import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';

import PrimaryFlatButton from './../../components/Button/PrimaryFlatButton';

export default class GetStarted extends Component {
    static navigationOptions = {
        header: null,
    }

    startIntro() {
        this.props.navigation.navigate('intro');
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
              <Text style={styles.heading}>Motion</Text>
              <Text style={styles.subHeading}>"create change"</Text>
            </View>
            <PrimaryFlatButton text="Get Started" onPress={() => this.startIntro()} />
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
    subHeading: {
        fontSize: 20,
        color: '#444',
        fontFamily: 'SourceSansPro_Italic',
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
