import { View, Text, Image, StyleSheet, Linking, TouchableOpacity } from 'react-native';

export default function App() {
  const usuario = {
    nome: "Manoela Oliveira",
    bio: "💜 Ready isn't a feeling, it's a decision 💜",
    curso: "Ciência da Computação",
    avatar: require('./assets/avatar.jpg'),
    linkedinIcon: require('./assets/linkedinRosa.png'),
    githubIcon: require('./assets/githubRosa.png'),
    githubUrl: "https://github.com/manoela-oliveira",
    linkedinUrl: "https://www.linkedin.com/in/manoela-oliveira09"
  };

  // Função para abrir o link do GitHub
  const handleOpenGithub = () => {
    Linking.openURL(usuario.githubUrl).catch(err => console.error("Não foi possível abrir o link do GitHub", err));
  };

  // Função para abrir o link do LinkedIn
  const handleOpenLinkedin = () => {
    Linking.openURL(usuario.linkedinUrl).catch(err => console.error("Não foi possível abrir o link do LinkedIn", err));
  };

  return (
    <View style={styles.container}>
      {/* Avatar do Usuário */}
      <Image
        source={usuario.avatar}
        style={styles.avatar}
      />

      {/* Nome do Usuário */}
      <Text style={styles.nome}>{usuario.nome}</Text>

      {/* Biografia do Usuário */}
      <Text style={styles.bio}>{usuario.bio}</Text>

      {/* Cartão de Informação do Curso */}
      <View style={styles.infoCard}>
        <Text style={styles.infoText}> 2026 {usuario.curso}</Text>
      </View>

      {/* Linha de Ícones Sociais */}
      <View style={styles.socialIconsRow}>
       {/* Ícone do LinkedIn - Agora clicável */}
        <TouchableOpacity style={styles.socialIconBox} onPress={handleOpenLinkedin}>
          <Image
            source={usuario.linkedinIcon}
            style={styles.socialIcon}
          />
        </TouchableOpacity>

        {/* Ícone do GitHub */}
        <TouchableOpacity style={styles.socialIconBox} onPress={handleOpenGithub}>
          <Image
            source={usuario.githubIcon}
            style={styles.socialIcon}
          />
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#341539',
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#C8A2C8',
    marginBottom: 16,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    maxWidth: 300,
    marginBottom: 10,
  },
  infoCard: {
    backgroundColor: '#A47DAB',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  infoText: {
    color: '#fff',
    fontSize: 14,
  },
  socialIconsRow: { // Contêiner para os ícones sociais (linha horizontal)
    flexDirection: 'row',
    marginTop: 10,
    gap: 10, // Espaçamento entre os ícones
  },
  socialIconBox: { // Contêiner individual para cada ícone social ou emoji
    backgroundColor: '#fff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 45,
  },
  socialIcon: { // Estilo para a imagem do ícone social
    width: 35,
    height: 35,
  },

});