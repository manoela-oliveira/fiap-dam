import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
        <View style={styles.fotoContainer}>
            <Text style={styles.foto}>MO</Text>
        </View>
      <Text style={styles.titulo}>Manoela Oliveira</Text>
      <TouchableOpacity style={styles.botao} onPress={() => router.push('/perfil')}>
        <Text style={styles.botaoTexto}>Ver meu perfil</Text>
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
fotoContainer: {
    width: 120,
    height: 120, 
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 60,
    borderColor: '#C5A8F9',
    alignItems: 'center', // Centers children horizontally
    justifyContent: 'center', // Centers children vertically
},
foto:{
    fontSize: 31, 
    fontWeight: 'bold', 
    color: '#C5A8F9'
},
  titulo: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    marginBottom: 30, 
    color: '#C5A8F9'
},
  botao: { 
    backgroundColor: '#8ad897', 
    padding: 12, 
    borderRadius: 12 
},
  botaoTexto: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: '600' 
},
});