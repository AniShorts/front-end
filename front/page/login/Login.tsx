import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styled from 'styled-components/native'

const Login = ({ navigation }: any) => {

  return (
    <>
      <Test />
      <View style={styles.sort} >
        <Logo>
          <Text>로고임</Text>
        </Logo>
        <TextInput
          style={styles.customInput}
          placeholder='닉네임을 입력해주세요'
        />
        <TextInput
          style={styles.customInput}
          placeholder='비밀번호를 입력해주세요'
        />
        <View style={styles.button}>
          <Button
            title='로그인'
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            title='회원 가입'
            onPress={() => navigation.navigate("Signup")}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  sort: {
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    backgroundColor: '#BEEBE9',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 15,
    width: 270,
    marginTop: 40,
    marginBottom: 20
  },
  customInput: {
    padding: 10,
    marginTop: 30,
    fontSize: 18,
    // textAlign: 'center',
    backgroundColor: 'red',
    width: 320,
    borderRadius:8
  },
});

const Test = styled.View`
  width: 100%;
  height: 35px;
  background-color: red;
`

const Logo = styled.View`
  width: 70%;
  height: 100px;
  margin-top: 10%;
  border: 1px solid red;
`

export default Login
