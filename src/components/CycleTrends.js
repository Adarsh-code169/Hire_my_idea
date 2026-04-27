import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import Svg, { Circle, Path, G } from 'react-native-svg';
import { COLORS, STYLES } from '../theme';

const DATA = [
  { month: 'Jan', value: 28, phasePos: '25%', pinkPos: 0 },
  { month: 'Feb', value: 30, phasePos: '20%', pinkPos: 12 },
  { month: 'Mar', value: 28, phasePos: '22%', pinkPos: 8 },
  { month: 'Apr', value: 32, phasePos: '15%', pinkPos: 16 },
  { month: 'May', value: 28, phasePos: '22%', pinkPos: 8 },
  { month: 'Jun', value: 28, phasePos: '25%', pinkPos: 0, active: true },
];

const SunIcon = () => (
  <Svg width="16" height="16" viewBox="0 0 24 24">
    {/* Outer dashed circle */}
    <Circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
    {/* Inner circle outline */}
    <Circle cx="12" cy="12" r="6" stroke="white" strokeWidth="1.5" fill="none" />
    {/* Offset dot (egg inside follicle) */}
    <Circle cx="14" cy="14" r="1.5" fill="white" />
  </Svg>
);

const DropletIcon = () => (
  <Svg width="12" height="14" viewBox="0 0 24 30">
    <Path
      d="M12,2.5 C12,2.5 4,11 4,18 C4,22.4 7.6,26 12,26 C16.4,26 20,22.4 20,18 C20,11 12,2.5 12,2.5 Z"
      stroke="white"
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

const Bar = ({ item }) => {
  const maxHeight = 160;
  const barHeight = (item.value / 35) * maxHeight;
  
  return (
    <View style={styles.barWrapper}>
      <Text style={[styles.barValue, item.value >= 30 && styles.barValueBold]}>{item.value}</Text>
      
      <View style={[styles.barContainer, { height: barHeight }]}>
        {/* Base Muted Purple */}
        <View style={[StyleSheet.absoluteFill, { backgroundColor: '#B4A5D9', borderRadius: 12 }]} />
        
        {/* Middle Segment (Greenish Pill) */}
        <View style={[styles.midSegment, { top: item.phasePos }]}>
          <SunIcon />
        </View>
        
        {/* Bottom Segment (Pink Pill) */}
        {/* Using dynamic pinkPos for exact staggered alignment */}
        <View style={[styles.bottomSegment, { bottom: item.pinkPos, justifyContent: 'flex-end', paddingBottom: 6 }]}>
          <DropletIcon />
        </View>
      </View>
      
      <View style={styles.monthLabelContainer}>
        <Text style={styles.barLabel}>{item.month}</Text>
      </View>
    </View>
  );
};

const CycleTrends = () => {
  return (
    <View style={styles.container}>
      <Text style={STYLES.sectionTitle}>Cycle Trends</Text>
      
      <View style={styles.cardContainer}>
        <View style={styles.arrowContainer}>
          <View style={styles.arrowCircle}>
             <ChevronLeft size={18} color="#B4A5D9" strokeWidth={3} />
          </View>
        </View>
        
        <View style={styles.chartArea}>
          {/* Horizontal Dashed Lines */}
          <View style={[styles.horizontalDashed, { top: 30 }]} />
          <View style={[styles.horizontalDashed, { top: 85 }]} />
          <View style={[styles.horizontalDashed, { bottom: 45 }]} />
          
          <View style={styles.barsRow}>
            {DATA.map((item, index) => (
              <Bar key={index} item={item} />
            ))}
          </View>
        </View>
        
        <View style={styles.arrowContainer}>
          <View style={styles.arrowCircle}>
             <ChevronRight size={18} color="#B4A5D9" strokeWidth={3} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  sectionTitleCustom: {
    marginBottom: 12,
  },
  cardContainer: {
    width: 343,
    height: 237,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 15,
    // Shadow/Elevation
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  arrowContainer: {
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2.5,
    borderColor: '#B4A5D9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartArea: {
    flex: 1,
    height: 180,
    position: 'relative',
    justifyContent: 'center',
  },
  barsRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 35,
    paddingHorizontal: 5,
    zIndex: 1,
  },
  barWrapper: {
    alignItems: 'center',
    width: '14%',
  },
  barValue: {
    fontSize: 14,
    color: '#000',
    marginBottom: 6,
    fontWeight: '500',
  },
  barValueBold: {
    fontWeight: '700',
    fontSize: 18,
  },
  barContainer: {
    width: 24,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  midSegment: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 38,
    backgroundColor: '#6D8E81',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  bottomSegment: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 38,
    backgroundColor: COLORS.pink,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  monthLabelContainer: {
    position: 'absolute',
    bottom: -32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthSelected: {
    borderWidth: 1.5,
    borderColor: '#4A5568',
    borderRadius: 6,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  barLabel: {
    fontSize: 13,
    color: '#000',
    fontWeight: '500',
    textAlign: 'center',
  },
  horizontalDashed: {
    position: 'absolute',
    left: -15,
    right: -15,
    height: 1,
    borderBottomWidth: 1,
    borderColor: '#F3F4F6',
    borderStyle: 'dashed',
    zIndex: 0,
  }
});

export default CycleTrends;
