import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Counter</Text>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttonGroup}>
        <Button title="+" onPress={() => setCount(count + 1)} />
        <Button title="-" onPress={() => setCount(count - 1)} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 28, marginBottom: 20 },
  count: { fontSize: 48, marginVertical: 20 },
  buttonGroup: { flexDirection: 'row', gap: 20 }
});
