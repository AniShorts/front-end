import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { useState } from 'react';

const FindId = ({ navigation }: any) => {

  const [checked, setChecked] = useState(false)

  return (
    <Sort>
      <BigText>휴대폰 번호를 입력해주세요</BigText>
      <SortText>원활한 서비스 제공을 위해, 휴대폰 번호를 입력해주세요</SortText>
      <AlignView>
        <CustomInput />
        <TouchableOpacity
          onPress={() => setChecked(!checked)}
          activeOpacity={0.8}>
          <Check>인증하기</Check>
        </TouchableOpacity>
      </AlignView>

      {
        checked ? <>
          <Certification>인증번호</Certification>
          <AlignView>
            <CustomInput />
            <TouchableOpacity
              activeOpacity={0.8}>
              <Check>이동하기</Check>
            </TouchableOpacity>
          </AlignView>
        </> : null
      }
    </Sort>
  );
}

const Sort = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`

const BigText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 35% 0px 8px 28px;
`

const SortText = styled.Text`
  color: gray;
  margin-left: 28px;
`

const CustomInput = styled.TextInput`
  width: 90%;
  height: 40px;
  padding: 0px 8px;
  margin-bottom: 24px;

  border-bottom-width: 1px;
  border-color: rgb(209, 213, 219);
`

const AlignView = styled.View`
  align-items: center;
`

const Certification = styled.Text`
  color: gray;
  margin: 10% 0px 0px 28px;
`

const Check = styled.Text`
  padding: 10px 38%;
  background-color: #BEEBE9;
  border: 1px solid #9BE3DE;
  border-radius: 4px;

  overflow: hidden;
  color: #FFFDF9;
  font-weight: 800;
`

export default FindId
