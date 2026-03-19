import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  const usuario = {
    nome: "Manoela Oliveira",
    bio: "💜 Ready isn't a feeling, it's a decision 💜",
    seguidores: "Ciência da Computação ",
    avatar: require('./assets/avatar.jpg'),
    stats2: require('./assets/linkedinRosa.png'),
    stats3: require('./assets/githubRosa.png')
  };
  return (
    <View style={styles.container}>
      {/* Avatar */}
      <Image
        source={usuario.avatar}
        style={styles.avatar}
      />
      {/* Nome */}
      <Text style={styles.nome}>{usuario.nome}</Text>
      {/* Bio */}
      <Text style={styles.bio}>{usuario.bio}</Text>
      {/* Stats1 */}
      <View style={styles.stats}>
        <Text style={styles.stat}> 😎 {usuario.seguidores}</Text>
      </View>
      <View style={styles.row}>
      {/* Stats2 */}
      <View style={styles.stats2}>
        <Text style={styles.stat2}>
        </Text>
        <Image
          source={usuario.stats2}
          style={styles.stats2}
        />
      </View>
      {/* Stats3 */}
      <View style={styles.stats3}>
        <Text style={styles.stat3}> 
          💕
        </Text>
      </View>
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
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#C8A2C8',
    marginBottom: 16,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    width: 500,
    marginBottom: 16,
  },
  stats: {
    backgroundColor: '#A47DAB',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  stat: {
    color: '#fff',
    fontSize: 14,
  },
  stats2: {
    marginTop: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
  },
  stat2: {
    color: '#fff',
    fontSize: 14,
  },
    stats3: {
    marginTop: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
  },
  stat3: {
    color: '#fff',
    fontSize: 14,
  },
  row: {
  flexDirection: 'row',
  marginTop: 10,
  gap: 10
  },
});
