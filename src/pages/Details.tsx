import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../interfaces/common'
type Props = StackScreenProps<RootStackParamList, 'Details'>

const DetailsScreen: React.FC<Props> = ({ navigation, route }) => {
  const { id } = route.params
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen </Text>
      <Text>{JSON.stringify(id)}</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: 'Updated!' })}
      />
    </View>
  );
}

export default DetailsScreen