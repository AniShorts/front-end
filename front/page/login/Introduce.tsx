import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import Video from 'react-native-video'

const Introduce = ({navigation}:any) => {
  return (
    <SafeAreaView style={styles.sort}>
     
      <View style={styles.button}>
        <Button
          title='로그인'
          onPress={() => navigation.navigate("Login")}
        />
      </View>
      <View  style={styles.button}>
         <Button
          color={'white'}
          title='회원가입'
          onPress={() => navigation.navigate("Signup")}
        />
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
  button: {
    backgroundColor: '#BEEBE9',
    width: 280,
    borderRadius: 15,
    marginBottom: 10,
    borderColor: 'white',
    borderWidth: 1,
  }
});

const Logo = styled.View`
  width: 280px;
  height: 500px;
  border: 1px solid red;
  margin: 40px 0 60px 0;
`


export default Introduce