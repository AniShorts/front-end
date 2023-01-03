import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { useState } from 'react'

const Signup = ({ navigation }: any) => {

  const [checked, setChecked] = useState(false)

  return (
    <Sort>
      <Logo
        source={require('../shared/TestLogo.jpg')}
      />

      <Text>ID</Text>
      <AlignView>
        <CustomInput
          placeholder='닉네임을 입력해주세요'
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Signup")}>
          <Check>중복확인</Check>
        </TouchableOpacity>
      </AlignView>

      <Text>비밀번호</Text>
      <CustomInputPassword
        placeholder='비밀번호를 입력해주세요'
      />

      <Text>비밀번호 확인</Text>
      <CustomInputPassword
        placeholder='비밀번호를 한번 더 입력하세요'
      />
      <Text>전화번호</Text>
      <AlignView>
        <CustomInput
          placeholder='전화번호를 입력해주세요'
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Signup")}>
          <Check>인증하기</Check>
        </TouchableOpacity>
      </AlignView>

      <AlignView>
        <CustomInput
          placeholder='인증번호를 입력해주세요'
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Signup")}>
          <Check>인증확인</Check>
        </TouchableOpacity>
      </AlignView>

      <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Signup")}>
            {
              checked ? <SignupText>회원가입</SignupText>  : <SignupText2>회원가입</SignupText2>
            }
        </TouchableOpacity>
    </Sort>
  );
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

const AlignView = styled.View`
  flex-direction: row;
`

const CustomInput = styled.TextInput`
  width: 60%;
  height: 40px;
  padding: 8px 10px;
  margin-bottom: 24px;
  margin-right: 10px;

  border-radius: 6px;
  border: 1px solid rgb(209, 213, 219);
`
const CustomInputPassword = styled.TextInput`
  width: 80%;
  height: 40px;
  padding: 8px 10px;
  margin-bottom: 24px;
  margin-right: 10px;

  border-radius: 6px;
  border: 1px solid rgb(209, 213, 219);
`

const Check = styled.Text`
  padding: 12px;
  background-color: #BEEBE9;
  border: 1px solid #9BE3DE;
  border-radius: 12px;

  overflow: hidden;
  color: #FFFDF9;
  font-weight: 800;
`

const SignupText = styled.Text`
  padding: 12px 100px;
  background-color: #BEEBE9;
  border: 1px solid #9BE3DE;
  border-radius: 12px;
  overflow: hidden;
  color: #FFFDF9;
  font-weight: 800;
`

const SignupText2 = styled.Text`
  padding: 12px 100px;
  background-color: #beebe96a;
  opacity: 0.5;
  border: 1px solid #BEEBE9;
  border-radius: 12px;
  overflow: hidden;
  color: #FFFDF9;
  font-weight: 800;
`

export default Signup
