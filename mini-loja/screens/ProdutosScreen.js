import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'; 
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
                <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.botaoAdicionar} onPress={() => adicionar(item)}>
              <Text style={styles.textoBotao}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        )} 
      /> 
    </View>
  ); 
} 

const styles = StyleSheet.create({ 
  container: { flex: 1, padding: 20, paddingTop: 60 }, 
  tituloContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  tituloIcone: { width: 55, height: 50, marginRight: 5},
  titulo: { fontSize: 20, fontFamily: 'PixelRetro', color: '#dbdada'}, 
  statusCarrinhoContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  statusCarrinhoIcone: { width: 30, height: 30, marginRight: 5 },
  statusCarrinhoTexto: { fontSize: 16, color: '#555' },
  card: { backgroundColor: '#272729', padding: 15, marginVertical: 8, borderRadius: 5, borderWidth: 1, borderColor: '#3b3b3b' }, 
  infoContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 }, 
  iconeBase: { resizeMode: 'contain', marginRight: 15 }, 
  nome: { fontSize: 12, fontFamily: 'PixelRetro', color: '#d5d5d5'},
  preco: { fontSize: 14, fontWeight: 'bold', color: '#d5d5d5' },
  botaoAdicionar: { backgroundColor: '#17cd5f', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 4,
    alignItems: 'center', borderWidth: 2, borderColor: '#0f8d42'
  },
  textoBotao: { fontFamily: 'PixelRetro', fontSize: 10, color: '#17512e'},
});