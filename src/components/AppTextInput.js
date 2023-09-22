import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

function AppTextInput({ icon, onPress, icontwo, togglePass, ispassVisible, isVisible = false, ...otherProps }) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const toggleSecureEntry = () => {
    
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={16}
            color={defaultStyles.colors.semi}
            style={styles.icon}
          />
        )}
        <TextInput
          // secureTextEntry={secureTextEntry}
          placeholderTextColor={defaultStyles.colors.medium}
          style={defaultStyles.text}
          {...otherProps}
          secureTextEntry={ispassVisible}
        />
      </View>
      <TouchableOpacity>
        <MaterialCommunityIcons onPress={onPress} style={styles.icon} name={icontwo} size={15} color={defaultStyles.colors.semi} />
      </TouchableOpacity>


      {/* {secureTextEntry && <MaterialCommunityIcons
        name={secureTextEntry ? 'eye-off' : 'eye'}
        size={18}
        color="gray"
        onPress={toggleSecureEntry}
        style={styles.see}
      />} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.white,
    borderColor: defaultStyles.colors.black,
    borderWidth: 1,
    borderRadius: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    height:60,
    padding: 15,
    marginVertical: 10,
    alignSelf: "center"
  },
  icon: {
    marginRight: 10,
    justifyContent:"center",
    alignContent: "center",
    marginTop:6
  },
  containerLeft: {
    flexDirection: 'row',
    // alignItems: 'center',
    // borderBottomWidth: 1,
    // borderBottomColor: 'gray',
    // paddingVertical: 10,
  },
  see: {

  }
});

export default AppTextInput;
