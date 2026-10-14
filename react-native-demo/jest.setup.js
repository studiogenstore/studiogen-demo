/* eslint-env jest */
// WebView is a native module that isn't available under Jest.
jest.mock('react-native-webview', () => {
  const { View } = require('react-native');
  const WebView = props => <View {...props} />;
  return { __esModule: true, default: WebView, WebView };
});
