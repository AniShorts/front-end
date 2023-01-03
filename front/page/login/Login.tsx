import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const Login = ({ navigation }: any) => {
  return (
    <Sort>
      <Logo 
        source={require('../shared/TestLogo.jpg')}/>
      <Text>ID</Text>
      <CustomInput
        placeholder='닉네임을 입력해주세요'
      />
      <Text>Password</Text>
      <CustomInput
        placeholder='비밀번호를 입력해주세요'
      />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("FindId")}>
        <LoginText>로그인</LoginText>
      </TouchableOpacity>
      <AlignText>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("FindId")}>
          <Text>아이디 찾기 </Text>
        </TouchableOpacity>
        <Text> | </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("FindPassword")}>
          <Text> 비밀번호 찾기</Text>
        </TouchableOpacity>
      </AlignText>
    </Sort>
  )
}

const Sort = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: white;
`

const Logo = styled.Image`
  width: 70%;
  height: 100px;
  margin-top: 10%;
  margin-bottom: 10%;
  border: 1px solid black;
`

const CustomInput = styled.TextInput`
  width: 84%;
  height: 40px;
  padding: 8px 10px;
  margin-bottom: 24px;

  border-radius: 6px;
  border: 1px solid rgb(209, 213, 219);
`
const LoginText = styled.Text`
  padding: 12px 140px;
  margin: 8px 0px 6px 0px;

  background-color: #BEEBE9;
  border: 1px solid #9BE3DE;
  border-radius: 8px;
  color: white;
  overflow: hidden;

  font-weight: bold;
  font-size: 14px;
`

const AlignText = styled.View`
  flex-direction: row;
  margin-top: 20px;
`

export default Login