import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coderhouse</Text>
      <Text style={styles.subtitle}>¡Tremendo! Hola world</Text>
      <Text style={styles.subtitle}>Primera entrega - React Native</Text>
      <Text style={styles.date}>20-01-2024</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textShadowColor: '#aaa',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 8,
  },
  date: {
    fontSize: 16,
    color: '#777',
    marginTop: 10,
  },
});