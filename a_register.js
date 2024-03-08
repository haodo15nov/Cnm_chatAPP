import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CheckBox from "@react-native-community/checkbox";

const RegisterScreen = () => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      {/* - - - - - - - - - - Header - - - - - - - - - - - */}
      <View style={styles.header}>
        <Text>Đăng Ký</Text>
      </View>
      {/* - - - - - - - - - - Body (input) - - - - - - - - - - - */}
      <View style={styles.body}>
        <TextInput
          style={styles.inputView}
          placeholder="Địa chỉ email"
          placeholderTextColor="gray"
        />
        <View style={{flexDirection:"row",justifyContent:'center',alignContent:'center'}}>
        <TextInput
          style={styles.inputViewS}
          placeholder="Họ"
          placeholderTextColor="gray"
        />
                <TextInput
          style={styles.inputViewS}
          placeholder="Tên"
          placeholderTextColor="gray"
        />
        </View>
        <TextInput
          style={styles.inputView}
          placeholder="SĐT"
          placeholderTextColor="gray"
          secureTextEntry
        />
                <TextInput
          style={styles.inputView}
          placeholder="Mật khẩu"
          placeholderTextColor="gray"
          secureTextEntry
        />
                <TextInput
          style={styles.inputView}
          placeholder="Mật khẩu"
          placeholderTextColor="gray"
          secureTextEntry
        />
      </View>
      {/* - - - - - - - - - - Footer (Button ) - - - - - - - - - - - */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.resbtn}>
          <Text style={styles.btntext}>Đăng Ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  // - - - - - - - - - - - - - - - Header - - - - - - - - - - - - - - -
  header: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  // - - - - - - - - - - - - - - - Body - - - - - - - - - - - - - - -
  body: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputView: {
    width: "85%",
    height: 50,
    backgroundColor: "#ced4da",
    borderRadius: 10,
    margin: 13,
    justifyContent: "center",
    padding: 20,
  },
  inputViewS: {
    width: "40%",
    height:50,
    backgroundColor: "#ced4da",
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
    padding: 20,
  },
  // - - - - - - - - - - - - - - - Footer - - - - - - - - - - - - - - -
  footer: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 30,
  },
  loginbtn: {
    width: "65%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#1890FF",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  resbtn: {
    width: "60%",
    height: 45,
    borderRadius: 10,
    backgroundColor: "#1890FF",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  btntext: {
    color: "white",
    fontWeight: "300",
    fontSize: 20,
  },
});
export default RegisterScreen;
