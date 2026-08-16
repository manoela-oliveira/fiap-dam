import { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  Alert, StyleSheet, KeyboardAvoidingView, Platform, 
  ScrollView, Keyboard
} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [confirmarSenhaVisivel, setConfirmarSenhaVisivel] = useState(false);
  
  const [erros, setErros] = useState({});

  const validar = () => {
    const novosErros = {};
    
    if (nome.trim().length === 0) novosErros.nome = 'Insira o nome de usuário';
    if (!email.includes('@')) novosErros.email = 'E-mail inválido';
    if (senha.length < 6) novosErros.senha = 'Senha deve ter mínimo 6 caracteres';
    if (senha !== confirmarSenha) novosErros.confirmarSenha = 'As senhas não coincidem';

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleLogin = () => {
    // Fecha o teclado antes de executar as ações para evitar os "bugs" na tela
    Keyboard.dismiss(); 

    if (validar()) {
      Alert.alert('Login realizado!', `Bem-vindo, ${nome}! 🎉`);
    }
  };

  // Verificação para mudar a cor do botão
  const formValido = 
    nome.trim().length > 0 &&
    email.includes('@') &&
    senha.length >= 6 &&
    senha === confirmarSenha;

  return (
    <KeyboardAvoidingView
      style={styles.container}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer} 
        showsVerticalScrollIndicator={false}
        // Permite clicar no botão diretamente mesmo com o teclado aberto
        keyboardShouldPersistTaps="handled" 
      >
        <Text style={styles.titulo}>🔐 Cadastro</Text>

        {/* Nome de Usuário */}
        <TextInput
          placeholder="Nome de usuário"
          value={nome}
          onChangeText={setNome}
          autoCapitalize="none"
          style={styles.input}
        />
        {erros.nome && <Text style={styles.erro}>{erros.nome}</Text>}

        {/* E-mail */}
        <TextInput
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />
        {erros.email && <Text style={styles.erro}>{erros.email}</Text>}

        {/* Senha */}
        <View style={styles.senhaContainer}>
          <TextInput
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={!senhaVisivel}
            style={[styles.input, { flex: 1, marginBottom: 0, borderWidth: 0 }]}
          />
          <Text
            onPress={() => setSenhaVisivel(!senhaVisivel)}
            style={styles.olho}
          >
            {senhaVisivel ? '🙈' : '👁️'}
          </Text>
        </View>
        {erros.senha && <Text style={styles.erro}>{erros.senha}</Text>}

        {/* Confirmar Senha */}
        <View style={styles.senhaContainer}>
          <TextInput
            placeholder="Confirmar senha"
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            secureTextEntry={!confirmarSenhaVisivel}
            style={[styles.input, { flex: 1, marginBottom: 0, borderWidth: 0 }]}
          />
          <Text
            onPress={() => setConfirmarSenhaVisivel(!confirmarSenhaVisivel)}
            style={styles.olho}
          >
            {confirmarSenhaVisivel ? '🙈' : '👁️'}
          </Text>
        </View>
        {erros.confirmarSenha && <Text style={styles.erro}>{erros.confirmarSenha}</Text>}

        <TouchableOpacity 
          style={[
            styles.botao, 
            formValido ? styles.botaoValido : styles.botaoInvalido
          ]} 
          onPress={handleLogin}
        >
          <Text style={styles.botaoTexto}>Entrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  titulo: {
    fontSize: 32, fontWeight: 'bold',
    textAlign: 'center', marginBottom: 32, color: '#333',
  },
  input: {
    backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd',
    borderRadius: 10, padding: 14, marginBottom: 8, fontSize: 16,
  },
  senhaContainer: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd',
    borderRadius: 10, marginBottom: 8,
  },
  olho: { padding: 14, fontSize: 20 },
  erro: { color: 'red', marginBottom: 8, marginLeft: 4 },
  botao: {
    borderRadius: 10,
    padding: 16, marginTop: 16, alignItems: 'center',
  },
  botaoInvalido: {
    backgroundColor: '#6c47ff',
  },
  botaoValido: {
    backgroundColor: '#2e7d32', // Verde
  },
  botaoTexto: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});