// import react native
import React from 'react';
import {View, TextInput, NativeModules, Button} from 'react-native';

const PDF_FILE_PATH = NativeModules.HtmlToPdf.PDF_FILE_PATH;

// import webview
import {WebView} from 'react-native-webview';

export default function App() {
  const jsScript = `
    document.body.style.backgroundColor = 'blue';
    document.getElementById("paragraphs").style.backgroundColor = "lightblue";
    true;
  `;
  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div style="align-items: center; justify-content: center">
      <h1 style="color: rgb(153, 0, 255); align-self: center">Hello, World!</h1>
    </div>
    <div
      id="paragraphs"
      style="
        justify-content: center;
        align-items: center;
        background-color: tomato;
      "
    >
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
        molestiae, ullam repudiandae magni dolorum quisquam eveniet aliquam iure
        nobis, ea tempora quos magnam adipisci quas praesentium nihil beatae
        unde delectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        laboriosam tempore praesentium dolore assumenda quae, ullam dignissimos
        molestias iste consectetur non aspernatur earum sit quisquam veritatis
        nisi repellendus voluptate laborum.
      </p>
    </div>
    <script>
      setTimeout(function () {
        window.print();
        window.ReactNativeWebView.postMessage('Hello!');
      }, 2000);
    </script>
  </body>
</html>

  `;
  const convertHandler = () => {
    NativeModules.HtmlToPdf.convertHtmlToPdf(html);
  };
  return (
    <View style={{flex: 1}}>
      <TextInput value={PDF_FILE_PATH} />
      <Button title="Convert" onPress={convertHandler} />
      <WebView
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor: 'black',
        }}
        originWhitelist={['*']}
        source={{html: html}}
        // injectedJavaScript={jsScript}
        // onMessage={event => {
        //   alert(event.nativeEvent.data);
        // }}
      />
    </View>
  );
}
