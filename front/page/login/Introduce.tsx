import React, { useState, useRef } from "react";
import { View, StyleSheet, Button, TouchableOpacity, Text } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons';

const Introduce = ({ navigation }: any) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <Sort>
      <View>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
      </View>
      <TouchableOpacity style={{ position: "relative" }}>
        <KakaoText>카카오로 빠르게 시작하기</KakaoText>
        <Feather name="message-circle" size={24} color="black" style={{ position: "absolute", top: 9, left: 12 }} />
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
  );
}

export default Introduce

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 300,
    height: 550,
    marginBottom: 30
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Sort = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: white;
`

const ButtonView = styled.View`
  flex-direction: row;
`

const KakaoText = styled.Text`
  padding: 12px 84px;
  background-color: #FEE500;
  border-radius: 12px;
  margin-bottom: 20px;
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
