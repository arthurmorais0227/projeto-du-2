import React, { useEffect, useState } from 'react';
import {
  View, Text, FlatList, Image,
  TouchableOpacity, StyleSheet, ActivityIndicator,
} from 'react-native';

import series from '../../data/series.json';

export default function SeriesScreen({ navigation }) {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setDados(series);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#b5dafe" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={dados}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Detalhes', { item, tipo: 'serie' })}
          >
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.categoria}>{item.categoria}</Text>
              <Text style={styles.descricao} numberOfLines={2}>{item.descricao}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    padding: 10,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141414',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    marginBottom: 12,
    overflow: 'hidden',
    elevation: 3,
  },
  imagem: {
    width: 100,
    height: 130,
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  nome: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  categoria: {
    color: '#b5dafe',
    fontSize: 12,
    marginBottom: 6,
  },
  descricao: {
    color: '#aaa',
    fontSize: 13,
  },
});