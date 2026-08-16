import { useState, useRef } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  Switch, ScrollView, Alert, StyleSheet,
  KeyboardAvoidingView, Platform, Keyboard,
} from 'react-native';

// Funções de máscara
const formatarCPF = (v) =>
  v.replace(/\D/g, '')
   .replace(/(\d{3})(\d)/, '$1.$2')
   .replace(/(\d{3})(\d)/, '$1.$2')
   .replace(/(\d{3})(\d{1,2})/, '$1-$2')
   .slice(0, 14);

const formatarTel = (v) =>
  v.replace(/\D/g, '')
   .replace(/(\d{2})(\d)/, '($1) $2')
   .replace(/(\d{5})(\d{1,4})/, '$1-$2')
   .slice(0, 15);

// Perfis disponíveis
const perfis = ['Estudante', 'Profissional', 'Freelancer'];

const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Campo deve ficar fora de App para evitar recriações (teclado "piscando")
const Campo = ({ label, erro, children }) => (
  <View style={styles.campoWrapper}>
    <Text style={styles.label}>{label}</Text>
    {children}
    {erro ? <Text style={styles.erro}>{erro}</Text> : null}
  </View>
);

export default function App() {
  const [nome, setNome]             = useState('');
  const [email, setEmail]           = useState('');
  const [cpf, setCpf]               = useState('');
  const [tel, setTel]               = useState('');
  const [perfil, setPerfil]         = useState('');
  const [termos, setTermos]         = useState(false);
  const [erros, setErros]           = useState({});
  const [carregando, setCarregando] = useState(false);

  const emailRef = useRef(null);
  const cpfRef   = useRef(null);
  const telRef   = useRef(null);

  const formularioValido = 
    nome.trim().length > 0 &&
    email_regex.test(email) &&
    cpf.length === 14 &&
    tel.length >= 14 &&
    perfil !== '' &&
    termos;

  const validar = () => {
    const e = {};
    if (!nome.trim())              e.nome   = 'Nome obrigatório';
    if (!email_regex.test(email))  e.email  = 'E-mail inválido';
    if (cpf.length < 14)           e.cpf    = 'CPF incompleto';
    if (tel.length < 14)           e.tel    = 'Telefone incompleto';
    if (!perfil)                   e.perfil = 'Escolha um perfil';
    if (!termos)                   e.termos = 'Aceite os termos para continuar';
    setErros(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    Keyboard.dismiss();

    if (!validar()) return;
    setCarregando(true);
    setTimeout(() => {
      setCarregando(false);
      Alert.alert('❀ Cadastro realizado!', `Bem-vindo(a), ${nome}!`);
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      style={styles.containerKeyboard}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.titulo}>✿ Cadastro ✿</Text>
        <Text style={styles.subtitulo}>Preencha os campos abaixo e torne-se parte do nosso time!</Text>

        <Campo label="Nome completo" erro={erros.nome}>
          <TextInput
            placeholder="Ex: Maria Silva"
            placeholderTextColor="#C4ADB0"
            value={nome}
            onChangeText={setNome}
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            style={[styles.input, erros.nome && styles.inputErro]}
          />
        </Campo>

        <Campo label="E-mail" erro={erros.email}>
          <TextInput
            ref={emailRef}
            placeholder="exemplo@email.com"
            placeholderTextColor="#C4ADB0"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => cpfRef.current.focus()}
            style={[styles.input, erros.email && styles.inputErro]}
          />
        </Campo>

        <Campo label="CPF" erro={erros.cpf}>
          <TextInput
            ref={cpfRef}
            placeholder="000.000.000-00"
            placeholderTextColor="#C4ADB0"
            value={cpf}
            onChangeText={(v) => setCpf(formatarCPF(v))}
            keyboardType="numeric"
            maxLength={14}
            returnKeyType="next"
            onSubmitEditing={() => telRef.current.focus()}
            style={[styles.input, erros.cpf && styles.inputErro]}
          />
        </Campo>

        <Campo label="Telefone" erro={erros.tel}>
          <TextInput
            ref={telRef}
            placeholder="(11) 99999-9999"
            placeholderTextColor="#C4ADB0"
            value={tel}
            onChangeText={(v) => setTel(formatarTel(v))}
            keyboardType="phone-pad"
            maxLength={15}
            returnKeyType="done"
            style={[styles.input, erros.tel && styles.inputErro]}
          />
        </Campo>

        <Campo label="Perfil" erro={erros.perfil}>
          <View style={styles.chips}>
            {perfis.map((op) => (
              <TouchableOpacity
                key={op}
                onPress={() => {
                  Keyboard.dismiss();
                  setPerfil(op);
                }}
                style={[styles.chip, perfil === op && styles.chipAtivo]}
              >
                <Text style={[styles.chipTexto, perfil === op && styles.chipTextoAtivo]}>
                  {op}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Campo>

        <View style={styles.termosRow}>
          <Switch
            value={termos}
            onValueChange={(val) => {
              Keyboard.dismiss();
              setTermos(val);
            }}
            trackColor={{ false: '#E0CCD0', true: '#D97E8B' }}
            thumbColor={termos ? '#FFF' : '#F5F5F5'}
          />
          <Text style={styles.termosText}>Aceito os termos de uso</Text>
        </View>
        {erros.termos ? <Text style={styles.erro}>{erros.termos}</Text> : null}

        <TouchableOpacity
          style={[
            styles.botao, 
            formularioValido && styles.botaoValido,
            carregando && { opacity: 0.6 }
          ]}
          onPress={handleSubmit}
          disabled={carregando}
        >
          <Text style={styles.botaoTexto}>
            {carregando ? 'Enviando...' : 'Criar conta'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  containerKeyboard: {
    flex: 1,
    backgroundColor: '#FFF0F2', 
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 24,
    paddingBottom: 40, 
  },
  titulo: {
    fontSize: 26,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 8,
    color: '#5C3D35',
    letterSpacing: 0.5,
  },
  subtitulo: {
    fontSize: 14,
    color: '#8A6D65',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  campoWrapper: { marginBottom: 16 },
  label: { 
    fontSize: 13, 
    fontWeight: '500', 
    color: '#5C3D35', 
    marginBottom: 6,
    letterSpacing: 0.2,
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E8CCD0',
    borderRadius: 12,
    padding: 14,
    fontSize: 15,
    color: '#5C3D35',
  },
  inputErro: { borderColor: '#D9534F' },
  erro: { color: '#C94E5C', fontSize: 12, marginTop: 4 },
  chips: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F7E1E3',
  },
  chipAtivo: { 
    backgroundColor: '#D97E8B'
  },
  chipTexto: {
    color: '#8A6D65',
    fontSize: 14,
  },
  chipTextoAtivo: {
    color: '#FFF',
    fontWeight: '500',
  },
  termosRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 4,
  },
  termosText: { 
    fontSize: 14, 
    color: '#5C3D35' 
  },
  botao: {
    backgroundColor: '#D97E8B',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
    shadowColor: '#D97E8B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  botaoValido: {
    backgroundColor: '#B24554',
    shadowColor: '#B24554',
  },
  botaoTexto: { 
    color: '#FFF', 
    fontSize: 16, 
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});