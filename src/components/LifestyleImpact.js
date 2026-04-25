import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ChevronDown } from 'lucide-react-native';
import { COLORS, STYLES } from '../theme';

const DATA = [
  { label: 'Sleep', color: COLORS.purple, levels: [1, 0.8, 0.6, 0.4, 0.2, 0.2, 0.1, 0.1, 0.1] },
  { label: 'Hydrate', color: COLORS.pink, levels: [0.8, 0.8, 0.6, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2] },
  { label: 'Caffeine', color: '#8BAFA4', levels: [0.9, 0.7, 0.7, 0.6, 0.5, 0.2, 0.2, 0.2, 0.2] },
  { label: 'Exercise', color: COLORS.pink, levels: [0.6, 0.4, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2, 0.2] },
];

const CorrelationRow = ({ label, color, levels }) => (
  <View style={styles.row}>
    <Text style={styles.rowLabel}>{label}</Text>
    <View style={styles.blocksContainer}>
      {levels.map((opacity, index) => (
        <View 
          key={index} 
          style={[
            styles.block, 
            { backgroundColor: color, opacity: opacity }
          ]} 
        />
      ))}
    </View>
  </View>
);

const LifestyleImpact = () => {
  return (
    <View style={styles.container}>
      <Text style={STYLES.sectionTitle}>Lifestyle Impact</Text>
      
      <View style={STYLES.card}>
        <View style={styles.headerRow}>
          <Text style={styles.cardTitle}>Correlation Strength</Text>
          
          <View style={styles.dropdown}>
            <Text style={styles.dropdownText}>4 months</Text>
            <ChevronDown size={14} color={COLORS.textSecondary} />
          </View>
        </View>

        <View style={styles.gridContainer}>
          {DATA.map((item, index) => (
            <CorrelationRow 
              key={index} 
              label={item.label} 
              color={item.color} 
              levels={item.levels} 
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 80, // Extra space for bottom navigation
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  dropdownText: {
    fontSize: 10,
    color: COLORS.textSecondary,
    marginRight: 4,
  },
  gridContainer: {
    gap: 12, // Space between rows
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowLabel: {
    width: 50, // Fixed width for labels to align blocks
    fontSize: 10,
    color: COLORS.textPrimary,
    fontWeight: '500',
  },
  blocksContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  block: {
    flex: 1,
    height: 14,
    borderRadius: 4,
    marginHorizontal: 2,
  }
});

export default LifestyleImpact;
