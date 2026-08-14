import { View, Text, FlatList, Button, StyleSheet, Image } from 'react-native'; 
import { useCarrinho } from '../context/ContextCarrinho';

const imgCarrinho = require('../assets/carrinho-compras.png');

export default function CarrinhoScreen() { 
  const { carrinho, limparCarrinho } = useCarrinho();

  const totalCarrinho = carrinho.reduce((soma, item) => soma + item.preco, 0);

  return (  
    <View style={styles.container}>
      <View style={styles.tituloContainer}>
        <Image source={imgCarrinho} style={styles.tituloIcone} />
        <Text style={styles.titulo}>Meu Carrinho</Text> 
      </View> 
      
      {carrinho.length === 0 ? ( 
        <Text style={styles.mensagemVazio}>Seu carrinho está vazio!</Text> 
      ) : ( 
        <> 
          <FlatList 
            data={carrinho} 
            keyExtractor={item => item.id + Math.random()} 
            renderItem={({ item }) => (  
              <View style={styles.card}>
                <View style={styles.infoContainer}>
                  <Image source={item.imagem} style={styles.icone} />
                  <View>
                    <Text style={styles.nome}>{item.nome}</Text>
                    <Text>R$ {item.preco.toFixed(2)}</Text>
                  </View>
                </View>
              </View>
            )}
          />
          
          <View style={styles.totalContainer}>
            <Text style={styles.totalTexto}>Total: R$ {totalCarrinho.toFixed(2)}</Text>
            <Button title="Limpar Carrinho" color="red" onPress={limparCarrinho} />
          </View> 
        </> 
      )}  
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: { flex: 1, padding: 20, paddingTop: 60 }, 

  tituloContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  tituloIcone: { width: 32, height: 32, marginRight: 10 },
  titulo: { fontSize: 24, fontWeight: 'bold' }, 

  card: { backgroundColor: '#f0f0f0', padding: 15, marginVertical: 8, borderRadius: 10 }, 
  infoContainer: { flexDirection: 'row', alignItems: 'center' },
  icone: { width: 40, height: 40, marginRight: 15 },
  nome: { fontSize: 16, fontWeight: '600' }, 
  totalContainer: { marginTop: 20, borderTopWidth: 1, borderColor: '#ccc', paddingTop: 10, alignItems: 'flex-end' }, 
  totalTexto: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 10 }, 
  mensagemVazio: { fontSize: 18, textAlign: 'center', marginTop: 50, color: '#555' }, 
});