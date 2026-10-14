# StudioGen Demos

Example apps that embed a [StudioGen](https://studiogen.store) workflow bot.

| Demo | Platform | SDK |
| --- | --- | --- |
| [`react-native-demo`](./react-native-demo) | React Native (iOS & Android) | [`@studiogen/react-native-sdk`](https://github.com/studiogenstore/react-native-sdk) |

## React Native demo

A small "Demo Store" screen with a floating chat button that opens the StudioGen support bot, using `StudioGenChatLauncher`.

```sh
cd react-native-demo
npm install

# Start Metro
npm start

# In another terminal
npm run android
# or, for iOS (first run only: bundle install && bundle exec pod install --project-directory=ios)
npm run ios
```

To point the demo at your own bot, change `WORKFLOW_URL` in [`react-native-demo/App.tsx`](./react-native-demo/App.tsx).

See the [React Native environment setup guide](https://reactnative.dev/docs/set-up-your-environment) if this is your first React Native project.

## Other SDKs

- [Android SDK](https://github.com/studiogenstore/android-sdk)
- [iOS SDK](https://github.com/studiogenstore/ios-sdk)
