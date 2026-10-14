/**
 * StudioGen chatbot demo.
 *
 * @format
 */

import { STUDIOGEN_WORKFLOW_URL } from '@env';
import { StudioGenChatLauncher } from '@studiogen/react-native-sdk';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

// Set in .env (see .env.example).
const WORKFLOW_URL = STUDIOGEN_WORKFLOW_URL;

// Same styles as the web embed snippet.
const BUTTON_CSS =
  'bottom:20px;right:20px;width:56px;height:56px;border-radius:50%;' +
  'background:#0f766e;color:white;border:none;font-size:24px;' +
  'box-shadow:0 4px 12px rgba(0,0,0,0.15);';
const PANEL_CSS =
  'bottom:90px;right:20px;width:400px;height:560px;border:none;' +
  'border-radius:16px;box-shadow:0 8px 30px rgba(0,0,0,0.12);';

const ORDERS = [
  { id: '#10482', item: 'Wireless earbuds', status: 'Out for delivery' },
  { id: '#10467', item: 'Running shoes', status: 'Delivered' },
  { id: '#10431', item: 'Coffee grinder', status: 'Refund in progress' },
];

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingTop: insets.top + 24, paddingBottom: insets.bottom + 110 },
        ]}
      >
        <Text style={styles.title}>Demo Store</Text>
        <Text style={styles.subtitle}>
          Tap the chat button in the corner to talk to the support bot.
        </Text>

        <Text style={styles.section}>Your orders</Text>
        {ORDERS.map(order => (
          <View key={order.id} style={styles.card}>
            <Text style={styles.cardTitle}>{order.item}</Text>
            <Text style={styles.cardMeta}>
              {order.id} · {order.status}
            </Text>
          </View>
        ))}
      </ScrollView>

      <StudioGenChatLauncher
        workflowUrl={WORKFLOW_URL}
        insets={insets}
        buttonStyle={BUTTON_CSS}
        panelStyle={PANEL_CSS}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#f6f7f9' },
  content: { paddingHorizontal: 20 },
  title: { fontSize: 28, fontWeight: '700', color: '#12372a' },
  subtitle: { marginTop: 6, fontSize: 15, color: '#4b5563' },
  section: {
    marginTop: 28,
    marginBottom: 10,
    fontSize: 17,
    fontWeight: '600',
    color: '#111827',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#e5e7eb',
  },
  cardTitle: { fontSize: 16, fontWeight: '600', color: '#111827' },
  cardMeta: { marginTop: 4, fontSize: 14, color: '#6b7280' },
});

export default App;
