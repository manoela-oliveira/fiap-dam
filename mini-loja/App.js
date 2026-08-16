import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
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
        {telaAtual === 'Produtos' ? <ProdutosScreen /> : <CarrinhoScreen />}

        <View style={styles.navContainer}>
          
          <TouchableOpacity 
            style={[
              styles.navButton, 
              { backgroundColor: telaAtual === 'Produtos' ? '#ac37ca' : 'transparent' }
            ]} 
            onPress={() => setTelaAtual('Produtos')}
          >
            <Text style={[
              styles.navText, 
              { color: telaAtual === 'Produtos' ? '#ffffff' : '#a8a8a8' }
            ]}>
              Produtos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[
              styles.navButton, 
              { backgroundColor: telaAtual === 'Carrinho' ? '#ac37ca' : 'transparent' }
            ]} 
            onPress={() => setTelaAtual('Carrinho')}
          >
            <Text style={[
              styles.navText, 
              { color: telaAtual === 'Carrinho' ? '#ffffff' : '#a8a8a8' }
            ]}>
              Carrinho
            </Text>
          </TouchableOpacity>

        </View>
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
    paddingVertical: 12,
    paddingBottom: 24, 
    borderTopWidth: 1, 
    borderColor: '#282828',
    backgroundColor: '#181818',
  },
  navButton: {
    paddingVertical: 8,
    borderRadius: 2,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181818',
  },
});