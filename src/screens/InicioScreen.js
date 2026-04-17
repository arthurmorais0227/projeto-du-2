import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function InicioScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="play-circle-outline" size={80} color="#b5dafe" />
      <Text style={styles.titulo}>Bem-vindo!</Text>
      <Text style={styles.subtitulo}>Explore filmes e séries pelo menu abaixo.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  titulo: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitulo: {
    color: '#aaa',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});