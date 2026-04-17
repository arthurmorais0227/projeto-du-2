import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ContatoScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="mail-outline" size={70} color="#b5dafe" />
      <Text style={styles.titulo}>Contato</Text>

      <TouchableOpacity
        style={styles.item}
        onPress={() => Linking.openURL('arthur.m.santos20@aluno.senai.br')}
      >
        <Ionicons name="mail" size={22} color="#b5dafe" />
        <Text style={styles.itemText}>arthur.m.santos20@aluno.senai.br</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => Linking.openURL('https://github.com/arthurmorais0227/projeto-du-2')}
      >
        <Ionicons name="logo-github" size={22} color="#b5dafe" />
        <Text style={styles.itemText}>github.com/arthurmorais0227/projeto_du</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => Linking.openURL('https://www.linkedin.com/in/arthurmorais0227/')}
      >
        <Ionicons name="logo-linkedin" size={22} color="#b5dafe" />
        <Text style={styles.itemText}>linkedin.com/in/arthurmorais0227/</Text>
      </TouchableOpacity>
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
    marginBottom: 30,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    padding: 14,
    width: '100%',
    marginBottom: 12,
    flexWrap: 'wrap',
  },
  itemText: {
    color: '#ddd',
    fontSize: 15,
    flex: 1,
    flexWrap: 'wrap',
  },
});