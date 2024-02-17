import React from "react";
import { StyleSheet, Pressable, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';


type Props_ = {
    isTimerRunning_: boolean;
    stopTimer_: () => void;
    startTimer_: () => void;
};

export const TimerToggleButton: React.FC<Props_> = ({ 
    isTimerRunning_, 
    stopTimer_, 
    startTimer_ 
}) => {
    return (
        <Pressable onPress={isTimerRunning_ ? stopTimer_ : startTimer_}>
            <View style={styles.conatiner_}>
                <FontAwesome
                    name={isTimerRunning_ ? "pause" : "play"}
                    size={125}                    
                    style={styles.icon_}
                />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    icon_: {
        alignSelf: "center",
        color: "#fff",

    },
    conatiner_:{
        borderWidth: 5,
        width: 250,
        height: 250,
        borderRadius: 250 / 2,
        justifyContent: "center",
        borderColor: '#fff',
        marginVertical: 50,

    } 
})