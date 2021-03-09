import React, {useEffect, useRef} from 'react';
import {View, Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../interfaces/common';
import {WebView, WebViewMessageEvent} from 'react-native-webview';
type Props = StackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen: React.FC<Props> = ({navigation, route}) => {
  // const { id } = route.params;
  // console.log(id);
  const webviewEl = useRef<any>();

  useEffect(() => {
    console.log(webviewEl);
    webviewEl.current.postMessage(
      JSON.stringify({
        token: 'token123456',
      }),
    );
  });

  // 接收h5传给RN WebView的消息
  const onMessage = (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    console.log('接收h5传给RN WebView的消息', data);
    navigation.setOptions({title: data.title});
  };

//   const INJECTED_JAVASCRIPT = `(function() {
//     window.ReactNativeWebView.postMessage(JSON.stringify(window.location));
// })();`;

  return (
    <WebView
      ref={webviewEl}
      source={{uri: 'https://nksyw.com'}}
      // injectedJavaScript={INJECTED_JAVASCRIPT}
      onMessage={onMessage}
    />
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Detail Screen </Text>
    //   <Text>{JSON.stringify(id)}</Text>
    //   <Button
    //     title="Go back"
    //     onPress={() => navigation.goBack()}
    //   />
    //   <Button
    //     title="Update the title"
    //     onPress={() => navigation.setOptions({ title: 'Updated!' })}
    //   />
    // </View>
  );
};

export default DetailsScreen;
