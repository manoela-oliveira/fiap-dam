import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useCarrinho } from '../context/ContextCarrinho';

export default function CarrinhoScreen() {
  const { carrinho, limparCarrinho } = useCarrinho();

  const totalCarrinho = carrinho.reduce((soma, item) => soma + item.preco, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🛒 Meu Carrinho</Text>
      {carrinho.length === 0 ? (
        <Text style={styles.mensagemVazio}>Seu carrinho está vazio!</Text>
      ) : (
        <>
          <FlatList
            data={carrinho}
            // Utilizando Math.random() para garantir chaves únicas em caso de itens duplicados
            keyExtractor={item => item.id + Math.random()} 
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text>R$ {item.preco.toFixed(2)}</Text>
              </View>
            )}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalTexto}>Total: R$ {totalCarrinho.toFixed(2)}</Text>
            <Button
              title="Limpar Carrinho"
              onPress={limparCarrinho}
              color="#dc3545"
            />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: '#f0f0f0', padding: 15, marginVertical: 8, borderRadius: 10 },
  nome: { fontSize: 16, fontWeight: '600' },
  totalContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 10,
    alignItems: 'flex-end',
  },
  totalTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  mensagemVazio: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
    color: '#555',
  },
});