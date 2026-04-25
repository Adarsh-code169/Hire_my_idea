import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { Grip } from 'lucide-react-native';
import { COLORS } from './src/theme';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20 }}>
        <Grip color={COLORS.purple} size={24} />
        <Text style={{ fontSize: 18, fontWeight: '600', marginLeft: 10 }}>Insights</Text>
      </View>
    </SafeAreaView>
  );
}
