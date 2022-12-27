import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

const Signup = ({ navigation }: any) => {

  return (
    <SafeAreaView style={styles.sort}>
      <Logo />
      <View style={{flexDirection:'row'}}>
        <TextInput
          style={styles.customInput}
          placeholder='닉네임을 입력해주세요'
        />
       <Text style={styles.asd}>asd</Text>
      </View>
      <TextInput
          style={styles.customInput}
          placeholder='비밀번호를 입력해주세요'
        />
        <TextInput
          style={styles.customInput}
          placeholder='비밀번호를 한번 더 입력하세요'
        />
        <View style={{flexDirection:'row'}}>
        <TextInput
          style={styles.customInput}
          placeholder='닉네임을 입력해주세요'
        />
       <Text style={styles.asd}>asd</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <TextInput
          style={styles.customInput}
          placeholder='닉네임을 입력해주세요'
        />
       <Text style={styles.asd}>asd</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sort: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFE3ED'
  },
  customInput: {
    padding: 10,
    fontSize: 18,
    backgroundColor: "#eee",
    width: 230,
    borderRadius: 8,
    borderWidth: 1,
    marginTop:30
  },
  button: {
    flexDirection: "row",
    backgroundColor: '#9BE3DE',
    width: 10,
    borderRadius: 4,
  },
  asd: {
    backgroundColor:'red'

  }
});

const Logo = styled.View`
  width: 70%;
  height: 100px;
  margin-top: 10%;
  margin-bottom: 30px;
  border: 1px solid red;
`

export default Signup
