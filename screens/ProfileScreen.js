import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function ProfileScreen({ setIsLoggedIn }) {
  const [user, setUser] = useState({ name: '', email: '' });
  useEffect(() => {
    const loadUserData = async () => {
      const storedUser = await AsyncStorage.getItem('userData');
      if (storedUser) {
        setUser(JSON.parse(storedUser));}};
    loadUserData();
  }, []);
  const handleLogout = async () => {
    await AsyncStorage.clear();
    setIsLoggedIn(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome</Text>
      <Text style={styles.info}>Name: {user.name}</Text>
      <Text style={styles.info}>Email: {user.email}</Text>
      <Button title="Logout" onPress={handleLogout} /></View>);}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  heading: { fontSize: 26, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  info: { fontSize: 18, marginBottom: 10 },
});
