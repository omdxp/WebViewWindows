// import react native
import React from 'react';
import {View} from 'react-native';

// import webview
import {WebView} from 'react-native-webview';

export default function App() {
  const jsScript = `
    document.body.style.backgroundColor = 'red';
    setTimout(function() {window.alert('hi')}, 2000);
    true;
  `;
  return (
    <View>
      <WebView
        originWhitelist={['*']}
        source={{html: '<h1>Hello, World!</h1>'}}
        injectedJavaScript={jsScript}
      />
    </View>
  );
}
