import { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { CarrinhoProvider } from './context/ContextCarrinho';
import ProdutosScreen from './screens/ProdutosScreen';
import CarrinhoScreen from './screens/CarrinhoScreen';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('Produtos');

  return (
    <CarrinhoProvider>
      <View style={styles.container}>
        <View style={styles.navContainer}>
          <Button
            title="Produtos"
            onPress={() => setTelaAtual('Produtos')}
            color={telaAtual === 'Produtos' ? '#007bff' : '#ccc'}
          />
          <Button
            title="Carrinho"
            onPress={() => setTelaAtual('Carrinho')}
            color={telaAtual === 'Carrinho' ? '#007bff' : '#ccc'}
          />
        </View>

        {telaAtual === 'Produtos' ? <ProdutosScreen /> : <CarrinhoScreen />}
      </View>
    </CarrinhoProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingTop: 40, 
    backgroundColor: '#fff',
  },
});