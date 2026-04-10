import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
export default function Sobre() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ciência da Computação</Text>
      <Text style={styles.subTitulo}>3° Semestre</Text>
      <Text style={styles.descricao}>▫ Tecnologias favoritas ▫</Text>
      <View style={styles.cardsContainer}>
        <Text style={styles.card}>MO</Text>
        <Text style={styles.card}>MO</Text>
        <Text style={styles.card}>MO</Text>
        </View>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.voltar}>← Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#050505' 
  },
  titulo: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 12,
    color: '#C5A8F9'
  },
  subTitulo: { 
    fontSize: 16, 
    color: '#555', 
    marginBottom: 40
  },
  descricao: { 
    fontSize: 20, 
    marginBottom: 12,
    color: '#9BD7FB'
  },
  cardsContainer: {
    width: 350,
    height: 400,
    marginBottom: 20,
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#9BD7FB'
  },
  card: {
    textAlign:'center',
    padding: 40,
    marginBottom: 10,
    backgroundColor: 'red'
  },
  voltar: { 
    fontSize: 16, 
    color: '#8ad897', 
    fontWeight: '600' 
  },
});