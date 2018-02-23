import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import { Icon } from 'react-native-elements';

import LocalFeed from './Tabs/LocalFeed';
import GlobalFeed from './Tabs/GlobalFeed';
import BookmarksFeed from './Tabs/BookmarksFeed';

export default TabNavigator({
    local: {
        screen: LocalFeed,
    },
    global: {
        screen: GlobalFeed,
    },
    bookmarks: {
        screen: BookmarksFeed,
    },
}, {
        tabBarOptions: {
            activeTintColor: '#5C7D87',
            inactiveTintColor: 'gray',
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
                    iconName = 'location';
                    iconType = 'octicon';
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
