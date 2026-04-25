import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Circle, G } from 'react-native-svg';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import { COLORS, STYLES } from '../theme';

const { width } = Dimensions.get('window');
const cardWidth = width - 40; // 20 padding on each side

const StabilitySummary = () => {
  return (
    <View style={styles.container}>
      <Text style={STYLES.sectionTitle}>Stability Summary</Text>
      
      <View style={[STYLES.card, styles.cardContainer]}>
        <ExpoLinearGradient
          colors={['rgba(240, 248, 255, 0.5)', 'rgba(230, 240, 255, 0.2)']}
          style={StyleSheet.absoluteFill}
          borderRadius={24}
        />
        <Text style={styles.description}>
          Based on your recent logs and symptom patterns.
        </Text>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreLabel}>Stability Score</Text>
          <Text style={styles.scoreValue}>78%</Text>
        </View>
        <View style={styles.chartContainer}>
          <Svg width="100%" height={120} viewBox="0 0 300 120">
            <Defs>
              <LinearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
                <Stop offset="0" stopColor="#E5E0FF" stopOpacity="0.8" />
                <Stop offset="1" stopColor="#E5E0FF" stopOpacity="0.1" />
              </LinearGradient>
              <LinearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
                <Stop offset="0" stopColor="#A78BFA" stopOpacity="0.6" />
                <Stop offset="1" stopColor="#A78BFA" stopOpacity="0.1" />
              </LinearGradient>
            </Defs>
            <Path
              d="M0,100 C100,90 200,60 300,20 L300,120 L0,120 Z"
              fill="url(#grad1)"
            />
            <Path
              d="M0,110 C150,110 200,80 300,50 L300,120 L0,120 Z"
              fill="url(#grad2)"
            />
            <Path
              d="M200,10 L200,110"
              stroke="#A78BFA"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <Circle cx="200" cy="15" r="5" fill="#8fd1b5" />
          </Svg>
          <View style={styles.yAxisLabels}>
            <Text style={styles.axisText}>32d</Text>
            <Text style={styles.axisText}>28d</Text>
            <Text style={styles.axisText}>24d</Text>
          </View>
          <View style={styles.xAxisLabels}>
            <Text style={styles.axisText}>Jan</Text>
            <Text style={styles.axisText}>Feb</Text>
            <Text style={[styles.axisText, styles.axisTextBold]}>Mar</Text>
            <Text style={styles.axisText}>Apr</Text>
          </View>
          <View style={styles.tooltip}>
            <Text style={styles.tooltipText}>Stability</Text>
            <Text style={styles.tooltipText}>Improving</Text>
            <View style={styles.tooltipArrow} />
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
  cardContainer: {
    padding: 20,
    paddingBottom: 15,
    backgroundColor: '#F7FBFF', // Slight bluish tint from the screenshot
    overflow: 'visible',
    position: 'relative'
  },
  description: {
    color: COLORS.textSecondary,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
    paddingRight: 20,
  },
  scoreContainer: {
    marginBottom: 10,
  },
  scoreLabel: {
    fontSize: 14,
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  scoreValue: {
    fontSize: 32,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  chartContainer: {
    height: 140,
    marginTop: 10,
    position: 'relative',
  },
  yAxisLabels: {
    position: 'absolute',
    left: -10,
    top: 30,
    bottom: 25,
    justifyContent: 'space-between',
  },
  xAxisLabels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
    paddingLeft: 30, // Offset for Y axis labels
  },
  axisText: {
    fontSize: 10,
    color: COLORS.textSecondary,
  },
  axisTextBold: {
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  tooltip: {
    position: 'absolute',
    top: -15,
    left: '56%', // approximate Mar position
    backgroundColor: '#000',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
    transform: [{ translateX: -40 }], // Center it
  },
  tooltipText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '500',
  },
  tooltipArrow: {
    position: 'absolute',
    bottom: -4,
    width: 8,
    height: 8,
    backgroundColor: '#000',
    transform: [{ rotate: '45deg' }],
  }
});

export default StabilitySummary;
