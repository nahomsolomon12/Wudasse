import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>ABOUT THE GAME</Text>
        <Text style={styles.title}>A meaningful way to learn.</Text>
        <Text style={styles.intro}>
          Wudasse Mariam brings reflection and play together in a welcoming card game experience.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>What you can expect</Text>
        <Text style={styles.cardText}>
          Discover reminders for playing the game, learn what each section means, and keep the
          experience easy to revisit.
        </Text>
      </View>
      <Link href="/" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Back to home</Text>
        </Pressable>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f8f7',
    padding: 24,
    paddingBottom: 40,
  },
  header: {
    paddingTop: 24,
    paddingBottom: 28,
  },
  eyebrow: {
    color: '#137184',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.8,
    marginBottom: 12,
  },
  title: {
    color: '#173843',
    fontSize: 36,
    fontWeight: '800',
    lineHeight: 43,
  },
  intro: {
    color: '#526b72',
    fontSize: 17,
    lineHeight: 26,
    marginTop: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#173843',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 3,
  },
  cardTitle: {
    color: '#173843',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  cardText: {
    color: '#526b72',
    fontSize: 16,
    lineHeight: 25,
  },
  button: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#137184',
    borderRadius: 14,
    marginTop: 28,
    paddingHorizontal: 22,
    paddingVertical: 15,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default AboutScreen;