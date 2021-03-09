import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Button,
  ImageBackground,
  Image,
  TouchableHighlight,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../interfaces/common';

type Props = StackScreenProps<RootStackParamList, 'Repayment'>;
const Loan: React.FC<Props> = ({navigation}) => {
  const handleOnPress = () => {
    navigation.push('Login');
  };

  return (
    <View style={styles.box}>
      <StatusBar
        backgroundColor="#193EA6"
        barStyle="light-content"
        translucent={false}
      />
      <ImageBackground
        style={styles.header}
        source={require('../assets/loan/banner.webp')}
        resizeMode="cover"
      />
      <View style={styles.contentBox}>
        <Text style={styles.contentTitle}>Maximum Loan Availability</Text>
        <ImageBackground
          style={styles.rupeeBg}
          source={require('../assets/loan/xuxian.webp')}>
          <Image
            style={styles.rupeeIcon}
            source={require('../assets/loan/rupee_icon.webp')}
          />
          <Text style={styles.rupeeText}>50,000</Text>
        </ImageBackground>
        <Text style={styles.contentText}>
          * Complete the application & get evaluated to get the approved amount
        </Text>
        <TouchableHighlight style={styles.applyBtnBox} onPress={handleOnPress}>
          <View style={styles.applyBtn}>
            <Text style={styles.applyBtnText}>Apply Now</Text>
            <Image
              style={styles.applyIcon}
              source={require('../assets/loan/Apply_icon.webp')}
            />
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.stepBox}>
        <Text style={styles.stepTitle}>The loan only takes three steps</Text>
        <Image
          style={styles.stepImage}
          source={require('../assets/loan/loan_Steps.webp')}
        />
      </View>
      <Button
        title="Go to Details1"
        onPress={() => navigation.navigate('Details', {id: 1})}
      />
    </View>
  );
};

const titleHeight = StatusBar.currentHeight! + 233;

const styles = StyleSheet.create({
  box: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    width: '100%',
    height: 232.5,
  },
  contentBox: {
    width: '92%',
    height: 220,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: -42,
    borderRadius: 8,
  },
  contentTitle: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 24.5,
    marginBottom: 22,
  },
  rupeeBg: {
    width: 164,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18.5,
  },
  rupeeIcon: {
    width: 10,
    height: 15,
    marginTop: 23.5,
    marginRight: 8,
  },
  rupeeText: {
    color: '#333333',
    fontSize: 37,
    fontWeight: 'bold',
  },
  contentText: {
    width: '63%',
    color: '#999',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'center',
  },
  applyBtnBox: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: 45,
    backgroundColor: '#F2882C',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  applyBtn: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 20,
  },
  applyIcon: {
    width: 17,
    height: 14,
  },
  stepBox: {
    marginTop: 47.5,
    alignItems: 'center',
  },
  stepTitle: {
    color: '#c1c1c1',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 20,
  },
  stepImage: {
    width: 313.5,
    height: 58.5,
  },
});

export default Loan;
