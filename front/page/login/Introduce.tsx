import React from 'react'
import { View, StyleSheet, Button, Text, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import Video from 'react-native-video'

const Introduce = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.sort}>
      <Logo />
      <View style={styles.kakaoButton}>
        <Button
          title='카카오로 빠르게 시작하기'
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        {/* <View style={styles.button}>
          <Button
            title='로그인'
            onPress={() => navigation.navigate("Login")}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='회원가입'
            onPress={() => navigation.navigate("Signup")}
          />
        </View> */}
        <TouchableOpacity
        	activeOpacity={0.5} //깜빡임을 조절하는 기능
>
          <Asd style={{backgroundColor:"red"}}>로그인</Asd>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sort: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFE3ED'
  },
  kakaoButton: {
    backgroundColor: 'yellow',
    width: 240,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#BEEBE9',
    width: 140,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 1,
  }
});

const Nbt = styled.View`
  background-color: '#red';
  width: 120px;
  border-radius: 12;
  margin-bottom: 10px;
  border: 1px solid red;
`

const Logo = styled.View`
  width: 280px;
  height: 500px;
  border: 1px solid red;
  margin: 40px 0 60px 0;
`

const Asd =styled.Text`
  width: 200px;
  height: 200px;
`


export default Introduce