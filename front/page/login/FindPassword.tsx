import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useState } from 'react';

const FindPassword = ({ navigation }: any) => {

  const [checked, setChecked] = useState(false)

  return (
    <Sort>
      <Logo source={require('../shared/TestLogo.jpg')} />
      <Text>전화번호</Text>
      <AlignView>
        <CustomInput
          placeholder='전화번호를 입력해주세요'
        />
        <TouchableOpacity
          onPress={() => setChecked(!checked)}
          activeOpacity={0.8}>
          <Check>인증하기</Check>
        </TouchableOpacity>
      </AlignView>
      {
        checked ? <><AlignView>
          <CustomInput
            placeholder='인증번호를 입력해주세요'
          />
          <TouchableOpacity
            activeOpacity={0.8}>
            <Check>인증확인</Check>
          </TouchableOpacity>
        </AlignView>
          <TouchableOpacity
            onPress={() => navigation.navigate("")}
            activeOpacity={0.8}>
            <Next>다음</Next>
          </TouchableOpacity>
        </> : null
      }
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
  width: 50%;
  height: 40px;
  padding: 8px 10px;
  margin-bottom: 24px;
  margin-right: 20px;

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

const Next = styled.Text`
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

export default FindPassword
