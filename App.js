import React from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import { Home, Clock, BarChart2, Plus, Grip } from 'lucide-react-native';
import StabilitySummary from './src/components/StabilitySummary';
import CycleTrends from './src/components/CycleTrends';
import BodyMetabolicTrends from './src/components/BodyMetabolicTrends';
import BodySignals from './src/components/BodySignals';
import LifestyleImpact from './src/components/LifestyleImpact';
import { COLORS } from './src/theme';

const { width } = Dimensions.get('window');

export default function App() {
  const activeTab = 'insights';

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.headerIconContainer}>
           <Grip color={COLORS.purple} size={24} />
        </View>
        <Text style={styles.headerTitle}>Insights</Text>
        <View style={{ width: 24 }} />
      </View>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <StabilitySummary />
        <CycleTrends />
        <BodyMetabolicTrends />
        <BodySignals />
        <LifestyleImpact />
      </ScrollView>
      <View style={styles.bottomNavWrapper}>
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <Home color={COLORS.textSecondary} size={24} />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Clock color={COLORS.textSecondary} size={24} />
            <Text style={styles.navText}>Track</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <BarChart2 color={COLORS.textPrimary} size={24} />
            <Text style={[styles.navText, styles.navTextActive]}>Insights</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.fab}>
          <Plus color={COLORS.textPrimary} size={24} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
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
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  bottomNavWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 30,
    backgroundColor: 'transparent',
  },
  bottomNav: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 10,
    color: COLORS.textSecondary,
    marginTop: 4,
    fontWeight: '500',
  },
  navTextActive: {
    color: COLORS.textPrimary,
    fontWeight: '700',
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
