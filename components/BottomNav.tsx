import { Link, usePathname } from 'expo-router';
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const IPHONE_WIDTH = 430;
const IPHONE_HEIGHT = 940;

export function BottomNav() {
  const { width, height } = useWindowDimensions();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  if (width > IPHONE_WIDTH || height > IPHONE_HEIGHT) {
    return null;
  }

  return (
    <View style={[styles.wrapper, { paddingBottom: Math.max(insets.bottom, 10) }]}>
      <View style={styles.navbar}>
        <Link href="/" asChild>
          <Pressable style={styles.item}>
            <Text style={[styles.icon, pathname === '/' && styles.activeText]}>H</Text>
            <Text style={[styles.label, pathname === '/' && styles.activeText]}>Home</Text>
          </Pressable>
        </Link>
        <Link href="/about" asChild>
          <Pressable style={styles.item}>
            <Text style={[styles.icon, pathname === '/about' && styles.activeText]}>i</Text>
            <Text style={[styles.label, pathname === '/about' && styles.activeText]}>About</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    bottom: 0,
    left: 0,
    paddingHorizontal: 16,
    position: 'absolute',
    right: 0,
  },
  navbar: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 22,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    maxWidth: 390,
    paddingHorizontal: 18,
    paddingTop: 10,
    shadowColor: '#173843',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.16,
    shadowRadius: 12,
    width: '100%',
  },
  item: {
    alignItems: 'center',
    minWidth: 90,
    paddingHorizontal: 18,
    paddingVertical: 4,
  },
  icon: {
    color: '#789097',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 26,
  },
  label: {
    color: '#789097',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  activeText: {
    color: '#137184',
  },
});
