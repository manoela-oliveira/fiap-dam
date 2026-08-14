import { useState } from 'react';
import { View, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { CarrinhoProvider } from './context/ContextCarrinho';
import ProdutosScreen from './screens/ProdutosScreen';
import CarrinhoScreen from './screens/CarrinhoScreen';

import { useFonts, PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p';

export default function App() {
  let [fontsLoaded] = useFonts({
    'PixelRetro': PressStart2P_400Regular,
  });

  const [telaAtual, setTelaAtual] = useState('Produtos');

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#676767" />
      </View>
    );
  }

  return (
    <CarrinhoProvider>
      <View style={styles.container}>
        <View style={styles.navContainer}>
          <Button
            title="Produtos"
            onPress={() => setTelaAtual('Produtos')}
            color={telaAtual === 'Produtos' ? '#ac37ca' : '#a8a8a8'}
          />
          <Button
            title="Carrinho"
            onPress={() => setTelaAtual('Carrinho')}
            color={telaAtual === 'Carrinho' ? '#ac37ca' : '#a8a8a8'}
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
    backgroundColor: '#181818'
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#282828',
    paddingTop: 40, 
    backgroundColor: '#181818',
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181818',
  },
});