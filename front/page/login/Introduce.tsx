import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import styled from 'styled-components/native'

const Introduce = ({navigation}: any) => {
  return (
    <>
    <Test/>
    <View style={styles.sort}>
      <Logo>
        <Text>로고들어감</Text>
      </Logo>
    <View style={styles.button}>
      <Button
        title='로그인'
        onPress={()=> navigation.navigate("Login")}
        />
       <Button
        title='회원 가입'
        onPress={()=> navigation.navigate("Signup")}
        />  
    </View>
        </View>
    </>
  )
}

const Test = styled.View`
  width: 100%;
  height: 35px;
  background-color: red;
`

const Logo = styled.View`
  width: 70%;
  height: 500px;
  border: 1px solid red;
`

const styles = StyleSheet.create({
  sort: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#F5EBE0"
  },
  button: {
    backgroundColor: '#BEEBE9',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 15,
    width: 270,
    marginTop: 40     
 }
});

export default Introduce