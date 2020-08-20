import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../interfaces/common'
type Props = StackScreenProps<RootStackParamList, 'Home'>

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details1"
        onPress={() => navigation.navigate('Details', { id: 1 })}
      />
      <Button
        title="Go to Details2"
        onPress={() => navigation.navigate('Details', { id: 2 })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginBottom: 10
  }
})

export default HomeScreen