import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

const Login = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.sort}>
      <Logo />
      <Text>ID</Text>
      <TextInput
        style={styles.customInput}
        placeholder='닉네임을 입력해주세요'
      />
      <Text>Password</Text>
      <TextInput
        style={styles.customInput}
        placeholder='비밀번호를 입력해주세요'
      />
      <View style={styles.button}>
        <Button
          title='로그인'
          color={'#FFFDF9'}
        />
      </View>
      <View style={styles.alignText}>
        <Text onPress={() => navigation.navigate("FindId")}>아이디 찾기 </Text>
        <Text> | </Text>
        <Text onPress={() => navigation.navigate("FindPassword")}> 비밀번호 찾기</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sort: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#FFE3ED'
  },
  button: {
    backgroundColor: '#9BE3DE',
    width: 310,
    borderRadius: 4,
    marginTop: 20
  },
  customInput: {
    padding: 10,
    fontSize: 18,
    backgroundColor: "#eee",
    width: 300,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
  },
  alignText: {
    flexDirection: "row",
    marginTop: 20
  }
});

const Logo = styled.View`
  width: 70%;
  height: 100px;
  margin-top: 10%;
  margin-bottom: 10%;
  border: 1px solid red;
`

export default Login