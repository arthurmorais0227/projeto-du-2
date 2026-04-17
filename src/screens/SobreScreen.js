import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SobreScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="information-circle-outline" size={70} color="#b5dafe" />
      <Text style={styles.titulo}>Sobre o App</Text>
      <Text style={styles.texto}>
        Este aplicativo foi desenvolvido como projeto de estudo em React Native,
        utilizando navegação com Drawer e TabBar, consumo de JSON e passagem de
        parâmetros entre telas.
      </Text>
      <Text style={styles.versao}>Versão 1.0.0</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 16,
  },
  texto: {
    color: '#aaa',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 24,
  },
  versao: {
    color: '#b5dafe',
    marginTop: 30,
    fontSize: 13,
  },
});