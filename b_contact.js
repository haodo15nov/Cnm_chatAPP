import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const ContactScreen = () => {
  const nav = useNavigation();
  const goToChat = () => {
    nav.navigate("chat");
  };

  const goToProfile = () => {
    nav.navigate("profile");
  };
  const [searchVisible, setSearchVisible] = useState(false);

  const [searchText, setSearchText] = useState("");

  const handleSearchButtonPress = () => {
    setSearchVisible(!searchVisible);
  };

  const handleSearchTextChange = (text) => {
    setSearchText(text);
    console.log("Searching for:", text);
  };

  const handleAddChat = () => {
    console.log("Adding new chat");
  };

  return (
    <View style={styles.container}>
      {/* - - - - - - - - - Header - - - - - - - - - */}
      <View style={styles.header}>
        {/* Seacrh */}
        <TouchableOpacity onPress={handleSearchButtonPress}>
        <Image
            source={require("../Images/search.png")}
            style={styles.headerIcon}
          />
        </TouchableOpacity>
        {searchVisible && (
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            onChangeText={handleSearchTextChange}
            value={searchText}
          />
        )}
        {/* Nút thêm */}
        <TouchableOpacity style={styles.addButton} onPress={handleAddChat}>
        <Image
            source={require("../Images/addfr.png")}
            style={styles.headerIcon}
          />
        </TouchableOpacity>
      </View>
      {/* - - - - - - - - - Body - - - - - - - - - */}
      <View style={styles.body}>
        <Text>Contact</Text>
      </View>
      {/* - - - - - - - - - Footer - - - - - - - - - */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={goToChat}>
          <Image
            source={require("../Images/chat.png")}
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require("../Images/contact.png")}
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToProfile}>
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
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: "absolute",
    top: 0,
    backgroundColor: "#1890FF",
  },
  searchButton: {
    marginRight: 10,
  },
  headerIcon:{
    resizeMode:"contain",
    height:25,
    width:25
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
  addButton: {
    padding: 10,
    borderRadius: 5,
  },
  // - - - - - - - - - - Body - - - - - - - - - -
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
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  footerText: {
    margin:7,
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  footerIcon:{
    resizeMode:"contain",
    height:32,
    width:32
  },
});
export default ContactScreen;
