import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { startReadSMS } from "@maniac-tech/react-native-expo-read-sms";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Fintown is ❤️</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
