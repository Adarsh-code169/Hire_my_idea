import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Circle } from 'react-native-svg';
import { COLORS, STYLES } from '../theme';

const BodyMetabolicTrends = () => {
  const [activeTab, setActiveTab] = useState('Monthly');

  // Approximate data points for the SVG path
  // x goes from 0 to 300, y goes from 0 (top, weight 75) to 120 (bottom, weight 35)
  // Data points: Jan(~38), Feb(~48), Mar(~40), Apr(~70), May(~52)
  // Mapped to Y coordinates (inverted scale, 0 is top): 
  // 75kg -> y=0, 35kg -> y=120
  // Range = 40kg = 120px -> 3px per kg
  // Jan 38kg -> 120 - (38-35)*3 = 111
  // Feb 48kg -> 120 - (48-35)*3 = 81
  // Mar 40kg -> 120 - (40-35)*3 = 105
  // Apr 70kg -> 120 - (70-35)*3 = 15
  // May 52kg -> 120 - (52-35)*3 = 69
  // 
  // X coordinates for 5 points (0, 75, 150, 225, 300)

  return (
    <View style={styles.container}>
      <Text style={STYLES.sectionTitle}>Body & Metabolic Trends</Text>
      
      <View style={STYLES.card}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.cardTitle}>Your weight</Text>
            <Text style={styles.cardSubtitle}>in kg</Text>
          </View>
          
          <View style={styles.toggleContainer}>
            <TouchableOpacity 
              style={[styles.toggleBtn, activeTab === 'Monthly' && styles.toggleBtnActive]}
              onPress={() => setActiveTab('Monthly')}
            >
              <Text style={[styles.toggleText, activeTab === 'Monthly' && styles.toggleTextActive]}>
                Monthly
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.toggleBtn, activeTab === 'Weekly' && styles.toggleBtnActive]}
              onPress={() => setActiveTab('Weekly')}
            >
              <Text style={[styles.toggleText, activeTab === 'Weekly' && styles.toggleTextActive]}>
                Weekly
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.chartContainer}>
          <Svg width="100%" height={150} viewBox="0 0 300 150">
            <Defs>
              <LinearGradient id="weightGrad" x1="0" y1="0" x2="0" y2="1">
                <Stop offset="0" stopColor={COLORS.pink} stopOpacity="0.4" />
                <Stop offset="1" stopColor={COLORS.pink} stopOpacity="0.0" />
              </LinearGradient>
            </Defs>
            <Path
              d="M10,125 C40,111 50,81 85,81 C120,81 130,105 160,105 C190,105 210,15 235,15 C260,15 280,69 310,69 L310,150 L10,150 Z"
              fill="url(#weightGrad)"
            />
            <Path
              d="M10,125 C40,111 50,81 85,81 C120,81 130,105 160,105 C190,105 210,15 235,15 C260,15 280,69 310,69"
              fill="none"
              stroke={COLORS.pink}
              strokeWidth="2"
            />
            <Circle cx="35" cy="113" r="3" fill="#FFF" stroke={COLORS.pink} strokeWidth="1.5" />
            <Circle cx="85" cy="81" r="3" fill="#FFF" stroke={COLORS.pink} strokeWidth="1.5" />
            <Circle cx="150" cy="100" r="3" fill="#FFF" stroke={COLORS.pink} strokeWidth="1.5" />
            <Circle cx="235" cy="15" r="3" fill="#FFF" stroke={COLORS.pink} strokeWidth="1.5" />
            <Circle cx="290" cy="55" r="3" fill="#FFF" stroke={COLORS.pink} strokeWidth="1.5" />
            <Path d="M0,0 L300,0" stroke="#F3F4F6" strokeWidth="1" strokeDasharray="4 4" />
            <Path d="M0,75 L300,75" stroke="#F3F4F6" strokeWidth="1" strokeDasharray="4 4" />
            <Path d="M0,150 L300,150" stroke="#F3F4F6" strokeWidth="1" strokeDasharray="4 4" />
          </Svg>
          <View style={styles.yAxisLabels}>
            <Text style={styles.axisText}>75</Text>
            <Text style={styles.axisText}>50</Text>
            <Text style={styles.axisText}>35</Text>
          </View>
          <View style={styles.xAxisLabels}>
            <Text style={styles.axisText}>Jan</Text>
            <Text style={styles.axisText}>Feb</Text>
            <Text style={styles.axisText}>Mar</Text>
            <Text style={styles.axisText}>Apr</Text>
            <Text style={styles.axisText}>May</Text>
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
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
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    padding: 2,
  },
  toggleBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 18,
  },
  toggleBtnActive: {
    backgroundColor: '#000',
  },
  toggleText: {
    fontSize: 10,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  toggleTextActive: {
    color: '#FFF',
  },
  chartContainer: {
    position: 'relative',
    marginTop: 10,
    paddingLeft: 20, // space for Y axis
  },
  yAxisLabels: {
    position: 'absolute',
    left: 0,
    top: -5,
    bottom: -5,
    justifyContent: 'space-between',
  },
  xAxisLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  axisText: {
    fontSize: 10,
    color: COLORS.textSecondary,
  }
});

export default BodyMetabolicTrends;
