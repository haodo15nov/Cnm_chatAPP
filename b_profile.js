import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const nav = useNavigation();

  const goToChat = () => {
    nav.navigate("chat");
  };

  const goToContact = () => {
    nav.navigate("contact");
  };

  const handleViewProfile = () => {
    console.log("View full profile");
  };

  const handleLogout = () => {
    nav.navigate("login");
    console.log("login");
  };

  return (
    <View style={styles.container}>
      {/*- - - - - - - - - Header - - - - - - - - -*/}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutbtn}>
          <Image
            source={require("../Images/settings.png")}
            style={styles.headerIcon}
          />
        </TouchableOpacity>
      </View>

      {/*- - - - - - - - - Body - - - - - - - - -*/}
      <View style={styles.profileInfo}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://i.pinimg.com/564x/e6/eb/28/e6eb285f58d7b13a0974014ba87734dc.jpg",
          }}
        />
        <Text style={styles.username}>Username</Text>
      </View>

      {/* - - - - - - - - -Footer- - - - - - - - - */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={goToChat}>
          <Image
            source={require("../Images/chat.png")}
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToContact}>
          <Image
            source={require("../Images/contact.png")}
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require("../Images/user.png")}
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  // - - - - - - - - - - Header - - - - - - - - - -
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 70,
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: "absolute",
    top: 0,
    backgroundColor: "#1890FF",
  },
  logoutbtn:{
    marginLeft:360,
  },
  headerIcon:{
    resizeMode:"contain",
    height:35,
    width:35,
  },
  // - - - - - - - - - - Body - - - - - - - - - -
  profileInfo: {
    alignItems: "center",
  },
  avatar: {
    borderWidth: 6,
    borderColor: "#1890FF",
    width: 140,
    height: 140,
    borderRadius: 39,
    marginBottom: 10,
  },
  username: {
    textAlign: "center",
    width: 200,
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
  viewProfileButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    backgroundColor: "#1890FF",
    padding: 20,
    borderRadius: 100,
    margin: 10,
  },
  logoutButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1890FF",
    width: 200,
    padding: 20,
    borderRadius: 100,
    margin: 10,
  },
  bodyText: {
    color: "white",
    fontWeight: "bold",
  },
  // - - - - - - - - - - Footer - - - - - - - - - -
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 100,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#1890FF",
    paddingVertical: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  footerText: {
    margin: 5,
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  footerIcon: {
    resizeMode: "contain",
    height: 32,
    width: 32,
  },
});
export default ProfileScreen;
