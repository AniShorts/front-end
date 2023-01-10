import React, { useState } from "react";
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import UserData from "./interface";


const Login = ({ navigation }: any) => {

  const [user, setUser] = useState<UserData>({
    nickname: "",
    password: ""
  })

  const { nickname, password } = user;

  const onChange = (keyvalue: string, e: any) => {
    const { text } = e.nativeEvent
    setUser({
      ...user,
      [keyvalue]: text
    });
  };

  console.log(user);


  return (
    <Sort>
      <AlignView>
        <Logo source={require('../shared/TestLogo.jpg')} />
      </AlignView>

      <SortText>아이디</SortText>
      <AlignView>
        <CustomInput
          onChange={(e) => onChange("nickname", e)}
          value={nickname}
          placeholder='닉네임을 입력해주세요'
        />
      </AlignView>

      <SortText>비밀번호</SortText>
      <AlignView>
        <CustomInput
          onChange={(e) => onChange("password", e)}
          value={password}
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
      </AlignView>
    </Sort>
  )
}

const Sort = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`

const AlignView = styled.View`
  align-items: center;
`

const AlignText = styled.Text`
  flex-direction: row;
  margin-top: 20px;
`

const Logo = styled.Image`
  width: 70%;
  height: 100px;
  margin-top: 10%;
  margin-bottom: 10%;
  border: 1px solid black;
`

const SortText = styled.Text`
  margin: 0px 0px 8px 32px;
  font-weight: 600;
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

export default Login