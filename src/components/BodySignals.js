import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';
import { COLORS, STYLES } from '../theme';

const { width } = Dimensions.get('window');

const BodySignals = () => {
  const radius = 80;
  const strokeWidth = 45;
  const circumference = 2 * Math.PI * radius;
  
  // Data: Mood(30), Bloating(31), Fatigue(21), Acne(17)
  // Converting to strokeDasharray and strokeDashoffset
  const moodVal = circumference * 0.30;
  const bloatingVal = circumference * 0.31;
  const fatigueVal = circumference * 0.22; // Adjusted to make up 100% total (30+31+17+22=100) or close to it
  const acneVal = circumference * 0.17;
  
  const moodOffset = 0;
  const bloatingOffset = -moodVal;
  const fatigueOffset = bloatingOffset - bloatingVal;
  const acneOffset = fatigueOffset - fatigueVal;

  return (
    <View style={styles.container}>
      <Text style={STYLES.sectionTitle}>Body Signals</Text>
      
      <View style={STYLES.card}>
        <View style={styles.header}>
          <Text style={styles.cardTitle}>Symptom Trends</Text>
          <Text style={styles.cardSubtitle}>Compared to last cycle</Text>
        </View>

        <View style={styles.chartContainer}>
          <Svg width={250} height={250} viewBox="0 0 250 250">
            <G rotation="-90" origin="125, 125">
              <Circle
                cx="125"
                cy="125"
                r={radius}
                stroke="#E5A8B2" // Light Rose
                strokeWidth={strokeWidth}
                fill="transparent"
                strokeDasharray={`${moodVal} ${circumference}`}
                strokeDashoffset={moodOffset}
              />
              <Circle
                cx="125"
                cy="125"
                r={radius}
                stroke="#C7B5FF"
                strokeWidth={strokeWidth}
                fill="transparent"
                strokeDasharray={`${bloatingVal} ${circumference}`}
                strokeDashoffset={bloatingOffset}
              />
              <Circle
                cx="125"
                cy="125"
                r={radius}
                stroke={COLORS.pink}
                strokeWidth={strokeWidth}
                fill="transparent"
                strokeDasharray={`${fatigueVal} ${circumference}`}
                strokeDashoffset={fatigueOffset}
              />
              <Circle
                cx="125"
                cy="125"
                r={radius}
                stroke="#8BAFA4"
                strokeWidth={strokeWidth}
                fill="transparent"
                strokeDasharray={`${acneVal} ${circumference}`}
                strokeDashoffset={acneOffset}
              />
            </G>
          </Svg>
          <View style={[styles.labelBubble, { top: 35, left: 20 }]}>
            <Text style={styles.labelValue}>30%</Text>
            <Text style={styles.labelText}>Mood</Text>
          </View>
          <View style={[styles.labelBubble, { top: 55, right: 10 }]}>
            <Text style={styles.labelValue}>31%</Text>
            <Text style={styles.labelText}>Bloating</Text>
          </View>
          <View style={[styles.labelBubble, { bottom: 20, right: 40 }]}>
            <Text style={styles.labelValue}>21%</Text>
            <Text style={styles.labelText}>Fatigue</Text>
          </View>
          <View style={[styles.labelBubble, { bottom: 35, left: 10 }]}>
            <Text style={styles.labelValue}>17%</Text>
            <Text style={styles.labelText}>Acne</Text>
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
  header: {
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  cardSubtitle: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: 250,
  },
  labelBubble: {
    position: 'absolute',
    backgroundColor: '#FFF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  labelValue: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  labelText: {
    fontSize: 10,
    color: COLORS.textSecondary,
  }
});

export default BodySignals;
