import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';

export default function TarefaItem({ tarefa, onRemover, onToggleConcluida }) {
  return (
    <View style={[styles.container, tarefa.concluida && styles.tarefaConcluida]}>
      <Switch
        value={tarefa.concluida}
        onValueChange={() => onToggleConcluida(tarefa.id)}
      />
      <Text style={[styles.texto, tarefa.concluida && styles.textoConcluido]}>
        {tarefa.texto}
      </Text>
      <TouchableOpacity onPress={() => onRemover(tarefa.id)}>
        <Text style={styles.remover}>❌</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    marginVertical: 4,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  tarefaConcluida: {
    backgroundColor: '#e0ffe0',
  },
  texto: { 
    fontSize: 16, 
    flex: 1, marginLeft: 10 
  }, 
  textoConcluido: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  remover: { 
    fontSize: 18 
  }
});