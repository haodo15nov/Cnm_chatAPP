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

const LoginScreen = () => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      {/* - - - - - - - - - - Header - - - - - - - - - - - */}
      <View style={styles.header}>
        <Text style={styles.headerText1}>Đăng Nhập</Text>
        <Text style={styles.headerText2}>Chào mừng bạn đến với Tshus, hãy đăng nhập để trò chuyện cùng bạn bè</Text>
      </View>
      {/* - - - - - - - - - - Body (input) - - - - - - - - - - - */}
      <View style={styles.body}>
        <TextInput
          style={styles.inputView}
          placeholder="Địa chỉ email"
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.inputView}
          placeholder="Mật khẩu"
          placeholderTextColor="gray"
          secureTextEntry
        />
        <TouchableOpacity style={{ paddingLeft: 260 }}>
          <Text style={{ fontStyle: "italic", fontSize: 12 }}>
            Quên mật khẩu ?
          </Text>

          <View style={{ borderWidth: 0.6, borderColor: "black" }}></View>
        </TouchableOpacity>
      </View>
      {/* - - - - - - - - - - Footer (Button ) - - - - - - - - - - - */}
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => nav.navigate("chat")}
          style={styles.loginbtn}
        >
          <Text style={styles.btntext}>Đăng Nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => nav.navigate("register")}
          style={styles.resbtn}
        >
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
    marginTop:20,
  },
  headerText1:{
    textAlign:"center",
    fontSize:24,
    fontWeight:"bold",
  },
  headerText2:{
    textAlign:"center",
    fontSize:14,
    marginTop:30
  },
  // - - - - - - - - - - - - - - - Body - - - - - - - - - - - - - - -
  body: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop:100,
  },
  inputView: {
    width: "85%",
    height: 55,
    backgroundColor: "#ced4da",
    borderRadius: 10,
    margin: 13,
    justifyContent: "center",
    padding: 20,
  },
  // - - - - - - - - - - - - - - - Footer - - - - - - - - - - - - - - -
  footer: {
    position:'relative',
    flex: 2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  loginbtn: {
    width: "65%",
    height: 55,
    borderRadius: 20,
    backgroundColor: "#1890FF",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  resbtn: {
    width: "50%",
    height: 50,
    borderRadius: 20,
    backgroundColor: "#1890FF",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  btntext: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
export default LoginScreen;
