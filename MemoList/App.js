import { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native'; // Importar TouchableOpacity
import AsyncStorage from '@react-native-async-storage/async-storage';
import TarefaItem from './components/TarefaItem';

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState('');

  useEffect(() => {
    carregarTarefas();
  }, []);

  const carregarTarefas = async () => {
    const dados = await AsyncStorage.getItem('tarefas');
    if (dados) setTarefas(JSON.parse(dados));
  };

  const salvarTarefas = async (lista) => {
    await AsyncStorage.setItem('tarefas', JSON.stringify(lista));
  };

  const adicionarTarefa = () => {
    if (!texto.trim()) return;
    const nova = { id: Date.now().toString(), texto, concluida: false };
    const novaLista = [...tarefas, nova];
    setTarefas(novaLista);
    salvarTarefas(novaLista);
    setTexto('');
  };

  const removerTarefa = (id) => {
    const novaLista = tarefas.filter((t) => t.id !== id);
    setTarefas(novaLista);
    salvarTarefas(novaLista);
  };

  const toggleConcluida = (id) => {
    const novaLista = tarefas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    );
    setTarefas(novaLista);
    salvarTarefas(novaLista);
  };

  const limparTodasTarefas = () => {
    Alert.alert(
      "Limpar tarefas",
      "Tem certeza que deseja remover todas as tarefas? Não será possível recuperá-las.",
      [
        {
          text: "Não",
          style: "cancel"
        },
        {
          text: "Sim",
          onPress: async () => {
            setTarefas([]);
            await AsyncStorage.removeItem('tarefas');
          }
        }
      ],
      { cancelable: false }
    );
  };

  const tarefasPendentes = tarefas.filter(tarefa => !tarefa.concluida).length;

  return (
    <View style={styles.container}>
      <Text style={styles.contador}>
        Tarefas Pendentes: {tarefasPendentes}
      </Text>

      <TextInput
        value={texto}
        onChangeText={setTexto}
        placeholder="Nova tarefa..."
        style={styles.input}
      />
      
      <View style={styles.containerBothButtons}>
        <TouchableOpacity style={styles.customAddButton} onPress={adicionarTarefa}>
          <Text style={styles.buttonText}>Adicionar ➕</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.customClearButton} onPress={limparTodasTarefas}>
          <Text style={styles.buttonText}>Limpar 🗑️</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TarefaItem
            tarefa={item}
            onRemover={removerTarefa}
            onToggleConcluida={toggleConcluida}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 40, 
    paddingTop: 60 
  },
  contador: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50, 
    marginBottom: 20, 
    textAlign: 'center',
    color: '#db5073',
  },
  input: {
    borderWidth: 1,
    borderColor: '#f3a2b6',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  containerBothButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  customAddButton: {
    backgroundColor: '#db5073',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
  customClearButton: {
    backgroundColor: '#912b44',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
    marginHorizontal: 2,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});