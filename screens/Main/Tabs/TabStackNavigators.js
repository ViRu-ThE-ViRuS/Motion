import { StackNavigator } from 'react-navigation';

import LocalFeed from './LocalFeed';
import GlobalFeed from './GlobalFeed';
import BookmarksFeed from './BookmarksFeed';

export const LocalFeedStack = StackNavigator({
    localFeed: LocalFeed,
});

export const GlobalFeedStack = StackNavigator({
    globalFeed: GlobalFeed,
});

export const BookmarksFeedStack = StackNavigator({
    bookmarksFeed: BookmarksFeed,
});
