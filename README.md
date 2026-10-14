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
cp .env.example .env   # then set STUDIOGEN_WORKFLOW_URL

# Start Metro
npm start

# In another terminal
npm run android
# or, for iOS (first run only: bundle install && bundle exec pod install --project-directory=ios)
npm run ios
```

The bot URL comes from `STUDIOGEN_WORKFLOW_URL` in `react-native-demo/.env` (see [`.env.example`](./react-native-demo/.env.example)). After changing it, restart Metro with `npm start -- --reset-cache` so the new value is picked up.

See the [React Native environment setup guide](https://reactnative.dev/docs/set-up-your-environment) if this is your first React Native project.

## Other SDKs

- [Android SDK](https://github.com/studiogenstore/android-sdk)
- [iOS SDK](https://github.com/studiogenstore/ios-sdk)
