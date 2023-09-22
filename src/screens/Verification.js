import {
    StyleSheet,
    View,
    KeyboardAvoidingView,
    Platform,
    Alert,
    Image,
    TouchableOpacity,
    Text
} from "react-native";
import React, { useState } from "react";
// import { Text } from "@rneui/themed";
import Screen from "../components/Screen";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import OTPInputView from "../components/OTPInputView";
import AppButton from "../components/AppButton";

export const Verification = ({ navigation }) => {
    const [otpcode, setOtpCode] = useState([]);
    const [error, setError] = useState(false);

    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
    const digits = "1234";

    const toggleBottomSheet = () => {
        setBottomSheetVisible(!isBottomSheetVisible);
    };
    const onClose = () => {
        setBottomSheetVisible(false);
    };

    return (
        <Screen>
            <KeyboardAvoidingView
                style={styles.container}
                focusable
                enabled
                behavior="height"
            >
                <View style={styles.wrapper}>
                    <Image
                        source={require("../assets/images/makarantaLogo.png")}
                        style={styles.image}
                    />
                </View>
                <View style={{ alignSelf: "center" }}>
                    <Text
                        style={{
                            fontWeight: "700",
                            textAlign: "center",
                            fontSize: 26,
                            color: "#0D9422",
                        }}
                    >
                        PIN CODE
                    </Text>
                    <Text
                        small
                        style={{ marginTop: 5, textAlign: "center", color: "#404040" }}
                    >
                        We have sent a 4 digit code verification to
                    </Text>
                    <Text
                        small
                        style={{
                            marginTop: 5,
                            textAlign: "center",
                            color: "#404040",
                            marginBottom: 30,
                        }}
                    >
                        081********630
                    </Text>
                </View>

                <View style={{ width: "80%", height: 100, paddingHorizontal: 32 }}>
                    <OTPInputView
                        pinCount={4}
                        editable={true}
                        keyboardAppearance="light"
                        onCodeChanged={(code) => {
                            otpcode.push(code);
                            if (otpcode.length > 1) {
                                setError(true);
                            }
                            if (otpcode.length === 4) {
                                setError(false);
                            } else setError(false);
                        }}
                        autoFocusOnLoad={true}
                        codeInputFieldStyle={{
                            width: 50,
                            height: 50,
                            color: "#404040",
                            borderWidth: 2,
                        }}
                        codeInputHighlightStyle={{
                            borderColor: "#0d9422",
                        }}
                        onCodeFilled={(code) => {
                            if (code === digits) {
                                // toggleBottomSheet();
                                alert("Succesful");
                            }
                            if (code !== digits) {
                                Alert.alert(
                                    "Error",
                                    "Verification failed, ask for a code resend"
                                );
                            }
                        }}
                    />
                    {error && (
                        <Text style={{ textAlign: "center", color: "red" }}>
                            OTP must be a 4 digit number
                        </Text>
                    )}
                </View>
                <AppButton
                    onPress={() => navigation.navigate("ChangePassword")}
                    title="Verify"
                    styling={{ marginTop: 20 }}
                />
                <View style={{ flexDirection: "row" }}>
                    <Text>Didn't recieve code?</Text>
                    <TouchableOpacity onPress={() => Alert.alert("Code sent")}>
                        <Text small style={styles.resend}>
                            Resend code
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    wrapper: {
        // padding:40,
        // backgroundColor:'#8062D6',
        // borderRadius:100,
        elevation: Platform.OS == "android" ? "rgba(0,0,0,0.2)" : null,
        marginVertical: 40,
        marginTop: "15%",
    },
    image: {
        width: 80,
        height: 80,
    },
    resend: {
        marginHorizontal: 7,
        color: "#0d9422",
    },
});
