import { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const icon = {
    icone: require('./assets/iconAgua.png'),
  }
  const [count, setCount] = useState(0);
  const [mensagem, setMensagem] = useState('Clique no nosso copinho virtual toda vez que beber um na vida real 😊');
  const [backgroundColor, setBackgroundColor] = useState('#0f90e6');

  useEffect(() => {
    if (count === 0) {
      setMensagem('Clique no nosso copinho virtual toda vez que beber um na vida real 😊');
      setBackgroundColor('#0f90e6');
    }
    if (count === 8) {
      setMensagem('Você atingiu sua meta, parabéns 🎉');
      setBackgroundColor('#20e2c8');
    }
    if (count === 12) {
      setMensagem('Hoje você se superou! Continue arrasando 👍');
      setBackgroundColor('#20e2c8'); // Cor amarela para superação
    }
    if (count === 15) {
      setMensagem('Tudo em exagero faz mal!\n Chegou a hora de parar 🚫');
      setBackgroundColor('#261bbd');
    }
  }, [count]);

  return (
    // Aplicação de cor de fundo dinâmica
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>

      <Text style={styles.titulo}> Hidrate-se! </Text>

      <Text style={styles.meta}>Vamos tentar bater a meta de 5 copos de água por dia?</Text>
      <Text style={styles.mensagem}>{mensagem}</Text>
      <Text style={styles.counter}>{count}</Text>

      {/* Ícone de água como botão principal */}
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Image source={icon.icone} style={styles.iconeAgua}/>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botao, styles.botaoZerar]}
        onPress={() => setCount(0)}>
        <Text style={styles.textoBotao}>Novo dia</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconeAgua: {
    width: 190,
    height: 190,
    borderRadius: 20
  },
  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'dashed',
    borderRadius: 10,
    padding: 5
  },
  meta: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    maxWidth: 350,
    padding: 5,
    marginBottom: 15,
  },
  mensagem: {
    color: '#1c29e2',
    backgroundColor: '#ffffffea',
    fontSize: 16,
    textAlign: 'center',
    maxWidth: 350,
    marginBottom: 15,
    padding: 5,
    borderRadius: 10
  },
  counter: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10
  },
  botao: {
    alignItems: 'center',
    marginTop: 20
  },
  textoBotao: {
    color: '#fff',
    backgroundColor: '#1c29e2',
    fontSize: 16,
    marginBottom: 15,
    padding: 5,
    borderRadius: 10
  },
});