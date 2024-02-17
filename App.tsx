import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TimerCountDownDisplay } from './TimerCountDownDisplay';
import { TimerToggleButton } from './TimerToggleButton';
import { TimerModeDisplay, TimerModes } from './TimerModeDisplay';

const FOCUS_TIME_MINUTES_ = 0.2 * 60 * 1000;
const BREAK_TIME_MINUTES_ = 0.1 * 60 * 1000;


export default function App() {

  const [timerCount_, setTimerCount_] = useState<number>(FOCUS_TIME_MINUTES_);
  const [timerInterval_, setTimerInterval_] = useState<NodeJS.Timer | null>(null);
  const [isTimerRunning_, setIsTimerRunning_] = useState<boolean>(false);
  const [timerMode_, setTimerModel_] = useState<TimerModes>("Focus");

  useEffect(() => {
    if (timerCount_ === 0) {
      if (timerMode_ === 'Focus') {
        setTimerModel_('Break');
        setTimerCount_(BREAK_TIME_MINUTES_)
      } else {
        setTimerModel_('Focus');
        setTimerCount_(FOCUS_TIME_MINUTES_)
      }
      stopTimer_();
    }
  }, [timerCount_])


  const startTimer_ = () => {
    setIsTimerRunning_(true);
    const id_ = setInterval(() => setTimerCount_((prev_) => prev_ - 1000), 1000)
    setTimerInterval_(id_)
  }

  const stopTimer_ = () => {
    if (timerInterval_ !== null) {
      clearInterval(timerInterval_);
    }
    setIsTimerRunning_(false);
  };

  // contrutor par atransformar numeros inteiros em horas minutos e segundo
  // const timerDate_ = new Date(timerCount_)

  return (
    <View style={{
      ...styles.container,
      ...{ backgroundColor: timerMode_ === 'Break' ? "#2a9d8f" : "#d95550" }
    }}>
      <TimerModeDisplay timerMode_={timerMode_} />
      <StatusBar style="auto" />
      <TimerToggleButton isTimerRunning_={isTimerRunning_} stopTimer_={stopTimer_} startTimer_={startTimer_} />
      <TimerCountDownDisplay timerDate_={new Date(timerCount_)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d95550',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
