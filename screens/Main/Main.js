import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import { Icon } from 'react-native-elements';

import { LocalFeedStack, GlobalFeedStack, BookmarksFeedStack } from './Tabs/TabStackNavigators';

export default TabNavigator({
    local: {
        screen: LocalFeedStack,
    },
    global: {
        screen: GlobalFeedStack,
    },
    bookmarks: {
        screen: BookmarksFeedStack,
    },
}, {
        tabBarOptions: {
            activeTintColor: '#5C7D87',
            inactiveTintColor: 'gray',
            showLabel: false,
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
        navigationOptions: ({ navigation }) => ({
            header: null,
            headerLeft: null,
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                let iconType;

                if (routeName === 'local') {
                    iconName = 'location-on';
                    iconType = 'materialicons';
                } else if (routeName === 'global') {
                    iconType = 'material-community';
                    if (focused) {
                        iconName = 'compass';
                    } else {
                        iconName = 'compass-outline';
                    }
                } else if (routeName === 'bookmarks') {
                    iconType = 'material-community';

                    if (focused) {
                        iconName = 'bookmark';
                    } else {
                        iconName = 'bookmark-outline';
                    }
                }

                return <Icon
                    name={iconName}
                    type={iconType}
                    color={tintColor}
                    size={25} />;
            },
        }),
    });
