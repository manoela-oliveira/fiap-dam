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
         <View style={styles.card}>
         <Text style={styles.cardTexto}>Java</Text>
         </View>
         <View style={styles.card}>
         <Text style={styles.cardTexto}>Python</Text>
         </View>
         <View style={styles.card}>
         <Text style={styles.cardTexto}>ReactNative</Text>
         </View>
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
    height: 130,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  card: {
    textAlign:'center',
    justifyContent: 'center',
    alignItems: 'center', 
    width: 110,
    height: 110,
    backgroundColor: '#9BD7FB',
    borderRadius: 5,
  },
  cardTexto: {
    color: '#fffdfd',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  voltar: { 
    fontSize: 16, 
    color: '#8ad897', 
    fontWeight: '600' 
  },
});