import { View, Text, FlatList, Button, StyleSheet, Image } from 'react-native'; 
import { produtos } from '../data/produtos'; 
import { useCarrinho } from '../context/ContextCarrinho'; 

const imgSacola = require('../assets/sacolas-compras.png');
const imgCarrinho = require('../assets/carrinho-compras.png');

export default function ProdutosScreen() { 
  const { adicionar, carrinho } = useCarrinho(); 
  
  return (  
    <View style={styles.container}>
      
      <View style={styles.tituloContainer}>
        <Image source={imgSacola} style={styles.tituloIcone} />
        <Text style={styles.titulo}>Produtos</Text>
      </View>

      <View style={styles.statusCarrinhoContainer}>
        <Image source={imgCarrinho} style={styles.statusCarrinhoIcone} />
        <Text style={styles.statusCarrinhoTexto}>Itens no carrinho: {carrinho.length}</Text> 
      </View>
      
      <FlatList 
        data={produtos} 
        keyExtractor={item => item.id} 
        renderItem={({ item }) => (  
          <View style={styles.card}>
            <View style={styles.infoContainer}>
              
              <Image 
                source={item.imagem} 
                style={[styles.iconeBase, { width: item.width, height: item.height }]} 
              />
              
              <View>
                <Text style={styles.nome}>{item.nome}</Text> 
                <Text>R$ {item.preco.toFixed(2)}</Text>
              </View>
            </View>
            <Button title="Adicionar ao Carrinho" onPress={() => adicionar(item)} />  
          </View>
        )} 
      /> 
    </View>
  ); 
} 

const styles = StyleSheet.create({ 
  container: { flex: 1, padding: 20, paddingTop: 60 }, 
  tituloContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  tituloIcone: { width: 45, height: 50, marginRight: 5},
  titulo: { fontSize: 24, fontWeight: 'bold' }, 
  statusCarrinhoContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  statusCarrinhoIcone: { width: 30, height: 30, marginRight: 5 },
  statusCarrinhoTexto: { fontSize: 16, color: '#555' },
  card: { backgroundColor: '#f0f0f0', padding: 15, marginVertical: 8, borderRadius: 10 }, 
  infoContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 }, 
  iconeBase: { resizeMode: 'contain', marginRight: 15 }, 
  nome: { fontSize: 16, fontWeight: '600' }, 
});