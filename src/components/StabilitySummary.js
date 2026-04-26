import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Circle, G, ClipPath } from 'react-native-svg';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import { COLORS, STYLES } from '../theme';

const cardWidth = 343;
const cardHeight = 305;

const StabilitySummary = () => {
  return (
    <View style={styles.container}>
      <Text style={STYLES.sectionTitle}>Stability Summary</Text>
      <View style={[styles.cardContainer, { width: cardWidth, height: cardHeight }]}>
        {/* Pure white background via cardContainer style */}
        <ExpoLinearGradient
          colors={['rgba(110, 140, 130, 0.25)', 'transparent']}
          start={{ x: 1, y: 0 }}
          end={{ x: 0.6, y: 0.4 }}
          style={[StyleSheet.absoluteFill, { borderRadius: 12 }]}
        />
        
        <View style={styles.content}>
          <Text style={styles.description}>
            Based on your recent logs and symptom patterns.
          </Text>
          
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreLabel}>Stability Score</Text>
            <Text style={styles.scoreValue}>78%</Text>
          </View>
          
          <View style={styles.chartContainer}>
            {/* Y Axis Labels */}
            <View style={styles.yAxisLabels}>
              <Text style={styles.axisText}>32d</Text>
              <Text style={styles.axisText}>28d</Text>
              <Text style={styles.axisText}>24d</Text>
            </View>

            <View style={styles.svgWrapper}>
              <Svg width="100%" height={120} viewBox="0 0 300 120">
                <Defs>
                  <LinearGradient id="gradTop" x1="0" y1="0" x2="0" y2="1">
                    <Stop offset="0" stopColor="#E0D4FC" stopOpacity="0.8" />
                    <Stop offset="1" stopColor="#E0D4FC" stopOpacity="0.1" />
                  </LinearGradient>
                  <LinearGradient id="gradMid" x1="0" y1="0" x2="0" y2="1">
                    <Stop offset="0" stopColor="#A78BFA" stopOpacity="0.9" />
                    <Stop offset="1" stopColor="#A78BFA" stopOpacity="0.2" />
                  </LinearGradient>
                  <LinearGradient id="gradBot" x1="0" y1="0" x2="0" y2="1">
                    <Stop offset="0" stopColor="#F1EAFF" stopOpacity="0.7" />
                    <Stop offset="1" stopColor="#F1EAFF" stopOpacity="0.1" />
                  </LinearGradient>
                  <ClipPath id="clipLeft">
                    <Path d="M0,0 H200 V120 H0 Z" />
                  </ClipPath>
                  <ClipPath id="clipRight">
                    <Path d="M200,0 H300 V120 H200 Z" />
                  </ClipPath>
                </Defs>

                {/* Historical Area (Lower Opacity) */}
                <G clipPath="url(#clipLeft)" opacity={0.5}>
                  <Path d="M0,115 C80,110 180,60 300,30 L300,120 L0,120 Z" fill="url(#gradTop)" />
                  <Path d="M0,115 C100,112 190,85 300,60 L300,120 L0,120 Z" fill="url(#gradMid)" />
                  <Path d="M0,115 C120,114 200,105 300,90 L300,120 L0,120 Z" fill="url(#gradBot)" />
                </G>

                {/* Projected Area (Full Opacity) */}
                <G clipPath="url(#clipRight)">
                  <Path d="M0,115 C80,110 180,60 300,30 L300,120 L0,120 Z" fill="url(#gradTop)" />
                  <Path d="M0,115 C100,112 190,85 300,60 L300,120 L0,120 Z" fill="url(#gradMid)" />
                  <Path d="M0,115 C120,114 200,105 300,90 L300,120 L0,120 Z" fill="url(#gradBot)" />
                </G>

                {/* Vertical Dashed Line at Mar */}
                <Path
                  d="M200,25 L200,115"
                  stroke="#8BAFA4"
                  strokeWidth="2"
                  strokeDasharray="12, 6"
                />
                <Circle cx="200" cy="25" r="6" fill="#8BAFA4" />
              </Svg>

              <View style={styles.xAxisLabels}>
                <Text style={styles.axisText}>Jan</Text>
                <Text style={styles.axisText}>Feb</Text>
                <Text style={[styles.axisText, styles.axisTextBold]}>Mar</Text>
                <Text style={styles.axisText}>Apr</Text>
              </View>

              {/* Tooltip positioned relative to Svg */}
              <View style={styles.tooltip}>
                <Text style={styles.tooltipText}>Stability</Text>
                <Text style={styles.tooltipText}>Improving</Text>
                <View style={styles.tooltipArrow} />
              </View>
            </View>
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
  cardContainer: {
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    overflow: 'hidden',
  },
  content: {
    padding: 20,
    paddingTop: 18,
    flex: 1,
  },
  description: {
    color: '#6B7280',
    fontSize: 18,
    lineHeight: 22,
    marginBottom: 12,
    fontWeight: '400',
  },
  scoreContainer: {
    marginBottom: 8,
  },
  scoreLabel: {
    fontSize: 17,
    color: '#000',
    fontWeight: '500',
  },
  scoreValue: {
    fontSize: 38,
    fontWeight: '800',
    color: '#000',
    marginTop: -4,
  },
  chartContainer: {
    flexDirection: 'row',
    marginTop: 5,
    height: 140,
  },
  yAxisLabels: {
    width: 35,
    height: 115, // Align with SVG height (120) minus some padding
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 5,
    marginRight: 5,
  },
  svgWrapper: {
    flex: 1,
    position: 'relative',
    height: 120,
  },
  xAxisLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    paddingHorizontal: 8,
  },
  axisText: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'right',
    fontWeight: '400',
  },
  axisTextBold: {
    fontWeight: '700',
    color: '#000',
  },
  tooltip: {
    position: 'absolute',
    top: -35,
    left: '66%', 
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignItems: 'center',
    transform: [{ translateX: -40 }],
    zIndex: 10,
  },
  tooltipText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '600',
  },
  tooltipArrow: {
    position: 'absolute',
    bottom: -4,
    width: 10,
    height: 10,
    backgroundColor: '#000',
    transform: [{ rotate: '45deg' }],
  }
});

export default StabilitySummary;
