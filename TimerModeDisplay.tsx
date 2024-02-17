import React from "react";
import { Text, View, StyleSheet } from 'react-native';

export type TimerModes = "Focus" | "Break";

type Props = {
    timerMode_: TimerModes
}
export const TimerModeDisplay: React.FC<Props> = ({timerMode_}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.timerModetext}>
                {timerMode_} Time {timerMode_ == "Focus" ? "🍅" : "🥦"}
            </Text>
        </View>);
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        width: '100%'
    },
    timerModetext:{
        fontSize: 40,
        fontWeight: "800",
        color: "#fff",
    }
})