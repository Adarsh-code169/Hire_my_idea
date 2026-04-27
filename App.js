import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import { Home, Clock, BarChart2, Plus, Grip, Construction } from 'lucide-react-native';
import Svg, { Circle } from 'react-native-svg';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import StabilitySummary from './src/components/StabilitySummary';
import CycleTrends from './src/components/CycleTrends';
import BodyMetabolicTrends from './src/components/BodyMetabolicTrends';
import TopSymptoms from './src/components/TopSymptoms';
import BodySignals from './src/components/BodySignals';
import LifestyleImpact from './src/components/LifestyleImpact';
import BottomNav from './src/components/BottomNav';
import { COLORS } from './src/theme';

const { width, height } = Dimensions.get('window');

const PlaceholderScreen = ({ title }) => (
  <View style={styles.placeholderContainer}>
    <Construction size={64} color={COLORS.purple} style={{ marginBottom: 16 }} />
    <Text style={styles.placeholderTitle}>{title}</Text>
    <Text style={styles.placeholderText}>This feature is currently in development.</Text>
  </View>
);

const CustomGridIcon = ({ size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="7" cy="7" r="4" fill={COLORS.purple} />
    <Circle cx="17" cy="7" r="4" fill={COLORS.purpleLight} />
    <Circle cx="7" cy="17" r="4" fill={COLORS.purpleLight} />
    <Circle cx="17" cy="17" r="4" fill={COLORS.purple} />
  </Svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('insights');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ExpoLinearGradient
        colors={['rgba(210, 122, 136, 0.46)', 'rgba(143, 209, 181, 0.12)', 'rgba(143, 209, 181, 0.08)']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0, 0.6, 1]}
        style={StyleSheet.absoluteFill}
      />
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <View style={styles.headerIconContainer}>
          <CustomGridIcon size={24} />
        </View>
        <Text style={styles.headerTitle}>
          {activeTab === 'insights' ? 'Insights' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={{ flex: 1 }}>
        {activeTab === 'insights' ? (
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <StabilitySummary />
            <CycleTrends />
            <BodyMetabolicTrends />
            <TopSymptoms />
            <LifestyleImpact />
          </ScrollView>
        ) : (
          <PlaceholderScreen title={activeTab === 'home' ? 'Home Dashboard' : 'Tracking Center'} />
        )}
      </View>

      <BottomNav activeTab={activeTab} onTabPress={setActiveTab} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerIconContainer: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: '700',
    color: COLORS.textPrimary,
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 90, // Reduced space to leave a little gap above the floating nav
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  placeholderTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 8,
  },
  placeholderText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  }
});
