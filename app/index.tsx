import { Link } from 'expo-router';
import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';

function HomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/background-image.png')}
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Image source={require('../assets/icon.png')} style={styles.logo} />
        <Text style={styles.eyebrow}>WUDASSE MARIAM</Text>
        <Text style={styles.title}>Learn, play, and remember.</Text>
        <Text style={styles.subtitle}>
          Explore the stories and meaning behind the Wudase Mariam prayer through a simple card game.
        </Text>
        <Link href="/about" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Learn more</Text>
          </Pressable>
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#0d3d4a',
  },
  backgroundImage: {
    opacity: 0.9,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(5, 28, 36, 0.58)',
  },
  content: {
    padding: 28,
    paddingBottom: 44,
  },
  logo: {
    width: 64,
    height: 64,
    borderRadius: 16,
    marginBottom: 24,
  },
  eyebrow: {
    color: '#f5c84b',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 12,
  },
  title: {
    color: '#ffffff',
    fontSize: 42,
    fontWeight: '800',
    lineHeight: 48,
    maxWidth: 420,
  },
  subtitle: {
    color: '#e2eff1',
    fontSize: 17,
    lineHeight: 26,
    marginTop: 16,
    maxWidth: 520,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#f5c84b',
    borderRadius: 14,
    marginTop: 28,
    paddingHorizontal: 24,
    paddingVertical: 16,
    width: 150,
  },
  buttonText: {
    color: '#173843',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default HomeScreen;