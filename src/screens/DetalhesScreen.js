import React from 'react';
import {
  View, Text, Image, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DetalhesScreen({ route, navigation }) {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>

      <Image source={{ uri: item.imagem }} style={styles.imagemGrande} />

      <View style={styles.conteudo}>
        <Text style={styles.nome}>{item.nome}</Text>

        <Text style={styles.descricaoCompleta}>{item.descricao}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 8,
    borderRadius: 20,
  },
  imagemGrande: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  conteudo: {
    padding: 20,
  },
  nome: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  descricaoCompleta: {
    color: '#aaa',
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'justify',
  },
});