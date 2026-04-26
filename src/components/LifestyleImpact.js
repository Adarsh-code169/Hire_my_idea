import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ChevronDown } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, STYLES } from '../theme';

const DATA = [
  {
    label: 'Sleep',
    colors: ['#B4A8DA', 'rgba(180, 168, 218, 0.34)'],
    filled: 7
  },
  {
    label: 'Hydrate',
    colors: ['#E99597', 'rgba(233, 149, 151, 0.56)'],
    filled: 3
  },
  {
    label: 'Caffeine',
    colors: ['#6E8C82', 'rgba(110, 140, 130, 0.38)'],
    filled: 5
  },
  {
    label: 'Exercise',
    colors: ['#F5C3C4', 'rgba(245, 195, 196, 0.52)'],
    filled: 4
  },
];

const CorrelationRow = ({ label, colors, filled }) => (
  <View style={styles.row}>
    <Text style={styles.rowLabel}>{label}</Text>
    <View style={styles.blocksContainer}>
      {[...Array(9)].map((_, index) => (
        index < filled ? (
          <LinearGradient
            key={index}
            colors={colors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.block}
          />
        ) : (
          <View
            key={index}
            style={[styles.block, { backgroundColor: '#EDEBEB' }]}
          />
        )
      ))}
    </View>
  </View>
);

const LifestyleImpact = () => {
  return (
    <View style={styles.container}>
      <Text style={STYLES.sectionTitle}>Lifestyle Impact</Text>

      <View style={[STYLES.card, { width: 343, borderRadius: 12, alignSelf: 'center', marginBottom: 0 }]}>
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
              colors={item.colors}
              filled={item.filled}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18, // Updated to match premium feel
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  dropdownText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginRight: 4,
  },
  gridContainer: {
    gap: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowLabel: {
    width: 60,
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  blocksContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  block: {
    width: 23,
    height: 22,
    borderRadius: 6,
  }
});

export default LifestyleImpact;
