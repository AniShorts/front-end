import React from 'react'
import {TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import Video from 'react-native-video'

const Introduce = ({ navigation }: any) => {
  return (
    <Sort>
      <Logo />
      <TouchableOpacity>
        <KakaoText>카카오로 빠르게 시작하기</KakaoText>
      </TouchableOpacity>
      <ButtonView>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Login")}>
          <MoveText>로그인</MoveText>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Signup")}>
          <MoveText>회원가입</MoveText>
        </TouchableOpacity>
      </ButtonView>
    </Sort>
  )
}

const Sort = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: white;
`

const Logo = styled.View`
  width: 280px;
  height: 500px;
  border: 1px solid red;
  margin: 40px 0 60px 0;
`

const ButtonView = styled.View`
  flex-direction: row;
`

const KakaoText = styled.Text`
  padding: 12px 84px;
  background-color: #FEE500;
  border-radius: 12px;
  margin-bottom: 10px;
  overflow: hidden;

  font-weight: 600;
`

const MoveText = styled.Text`
  padding: 12px 24px;
  background-color: #BEEBE9;
  border: 1px solid #9BE3DE;
  border-radius: 12px;
  overflow: hidden;
  color: #FFFDF9;
  font-weight: 800;
  margin : 0px 10px 0px 10px;
`


export default Introduce