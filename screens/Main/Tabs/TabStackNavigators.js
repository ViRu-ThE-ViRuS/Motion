import { StackNavigator } from 'react-navigation';

import LocalFeed from './LocalFeed';
import GlobalFeed from './GlobalFeed';
import BookmarksFeed from './BookmarksFeed';
import CreateMotion from './../../CreateMotion/CreateMotion';

export const LocalFeedStack = StackNavigator({
    localFeed: LocalFeed,
    createMotion: CreateMotion,
});

export const GlobalFeedStack = StackNavigator({
    globalFeed: GlobalFeed,
    createMotion: CreateMotion,
});

export const BookmarksFeedStack = StackNavigator({
    bookmarksFeed: BookmarksFeed,
    createMotion: CreateMotion,
});
