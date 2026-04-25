import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { ChevronLeft, ChevronRight, Moon, Zap, Activity } from 'lucide-react-native';
import { COLORS, STYLES } from '../theme';

const DATA = [
  { month: 'Jan', value: 28, bottomColor: COLORS.pink, topColor: COLORS.purpleLight, icon: 'Activity' },
  { month: 'Feb', value: 30, bottomColor: COLORS.pink, topColor: COLORS.purple, icon: 'Moon', active: true },
  { month: 'Mar', value: 28, bottomColor: COLORS.pink, topColor: COLORS.purpleLight, icon: 'Moon' },
  { month: 'Apr', value: 32, bottomColor: COLORS.pink, topColor: COLORS.purple, icon: 'Moon', active: true },
  { month: 'May', value: 28, bottomColor: COLORS.pink, topColor: COLORS.purpleLight, icon: 'Zap' },
  { month: 'Jun', value: 28, bottomColor: COLORS.pink, topColor: COLORS.purpleLight, icon: 'Zap' },
];

const Bar = ({ item }) => {
  const heightRatio = item.value / 35; // max value is slightly more than 32
  const totalHeight = 120;
  const barHeight = totalHeight * heightRatio;
  
  // Appoximate split based on the image
  const bottomHeight = barHeight * 0.3;
  const topHeight = barHeight * 0.7;

  return (
    <View style={styles.barWrapper}>
      <Text style={[styles.barValue, item.active && styles.barValueActive]}>{item.value}</Text>
      
      <View style={[styles.barContainer, { height: barHeight }]}>
        <View style={[styles.barTop, { backgroundColor: item.topColor, height: topHeight }]} />
        <View style={[styles.barBottom, { backgroundColor: item.bottomColor, height: bottomHeight }]} />
        
        <View style={styles.iconContainer}>
          {item.icon === 'Moon' && <Moon size={12} color="#FFF" />}
          {item.icon === 'Zap' && <Zap size={12} color="#FFF" />}
          {item.icon === 'Activity' && <Activity size={12} color="#FFF" />}
        </View>
      </View>
      
      <Text style={[styles.barLabel, item.active && styles.barLabelActive]}>{item.month}</Text>
    </View>
  );
};

const CycleTrends = () => {
  return (
    <View style={styles.container}>
      <Text style={STYLES.sectionTitle}>Cycle Trends</Text>
      
      <View style={[STYLES.card, styles.cardLayout]}>
        <View style={styles.arrowContainer}>
          <View style={styles.arrowCircle}>
             <ChevronLeft size={16} color={COLORS.purple} />
          </View>
        </View>
        <View style={styles.chartArea}>
          {DATA.map((item, index) => (
            <Bar key={index} item={item} />
          ))}
          <View style={styles.dashedLine} />
        </View>
        <View style={styles.arrowContainer}>
          <View style={styles.arrowCircle}>
             <ChevronRight size={16} color={COLORS.purple} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  cardLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 25,
  },
  arrowContainer: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position: 'relative',
    height: 160,
    paddingBottom: 25, // space for labels
  },
  barWrapper: {
    alignItems: 'center',
    width: '15%',
  },
  barValue: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 8,
    fontWeight: '600',
  },
  barValueActive: {
    color: COLORS.textPrimary,
  },
  barContainer: {
    width: 16,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  barTop: {
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  barBottom: {
    width: '100%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  iconContainer: {
    position: 'absolute',
    top: '40%', // approx middle of the top section
  },
  barLabel: {
    position: 'absolute',
    bottom: -25,
    fontSize: 10,
    color: COLORS.textSecondary,
  },
  barLabelActive: {
    color: COLORS.textPrimary,
    fontWeight: '600',
  },
  dashedLine: {
    position: 'absolute',
    bottom: 25, // Above the labels
    left: 0,
    right: 0,
    height: 1,
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
    borderStyle: 'dashed',
    zIndex: -1,
  }
});

export default CycleTrends;
