import React from "react";
import { Text, View, StyleSheet } from "react-native";

type Props_ = {
    timerDate_: Date;
}
export const TimerCountDownDisplay: React.FC<Props_> = ({ timerDate_ }) => {
    return (
        <View>
            <Text style={styles.TimerCountDownText_}>
                {timerDate_.getMinutes().toString().padStart(2, "0")}:
                {timerDate_.getSeconds().toString().padStart(2, "0")}
            </Text>
        </View>);
};

const styles = StyleSheet.create({
    TimerCountDownText_:{
        fontSize: 40,
        fontWeight: "800",
        color: "#fff",
        
    }
})