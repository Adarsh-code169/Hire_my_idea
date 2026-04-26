import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Circle } from 'react-native-svg';
import { STYLES } from '../theme';

const cardWidth = 343;
const cardHeight = 266;

const BodyMetabolicTrends = () => {
  return (
    <View style={styles.container}>
      <Text style={STYLES.sectionTitle}>Body & Metabolic Trends</Text>
      
      <View style={[styles.cardContainer, { width: cardWidth, height: cardHeight }]}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Your weight</Text>
            <Text style={styles.subtitle}>in kg</Text>
          </View>
          
          <View style={styles.toggleContainer}>
            <TouchableOpacity style={styles.toggleActive}>
              <Text style={styles.toggleTextActive}>Monthly</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.toggleInactive}>
              <Text style={styles.toggleTextInactive}>Weekly</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.chartWrapper}>
          {/* Y-Axis Labels and Horizontal Dashed Lines */}
          <View style={styles.chartBackground}>
            <View style={styles.gridLineContainer}>
               <Text style={styles.yAxisText}>75</Text>
               <View style={styles.dashedLine} />
            </View>
            <View style={styles.gridLineContainer}>
               <Text style={styles.yAxisText}>50</Text>
               <View style={styles.dashedLine} />
            </View>
            <View style={styles.gridLineContainer}>
               <Text style={styles.yAxisText}>25</Text>
               <View style={styles.dashedLine} />
            </View>
          </View>

          <View style={styles.svgContainer}>
            <Svg width={282} height={156} viewBox="0 0 282 156">
              <Defs>
                <LinearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <Stop offset="0" stopColor="#E29393" stopOpacity="0.3" />
                  <Stop offset="0.6" stopColor="#E29393" stopOpacity="0.05" />
                  <Stop offset="1" stopColor="#E29393" stopOpacity="0" />
                </LinearGradient>
              </Defs>

              {/* Area Fill */}
              <Path
                d="M0,145 C30,145 40,120 55,120 C85,120 110,95 130,95 C150,95 170,115 190,115 C220,115 230,25 260,25 C275,25 280,80 282,80 L282,156 L0,156 Z"
                fill="url(#areaGrad)"
              />

              {/* Data Line */}
              <Path
                d="M0,145 C30,145 40,120 55,120 C85,120 110,95 130,95 C150,95 170,115 190,115 C220,115 230,25 260,25 C275,25 280,80 282,80"
                fill="none"
                stroke="#E29393"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Data Dots with Enhanced Glow effect */}
              {[
                { x: 55, y: 120 },
                { x: 130, y: 95 },
                { x: 190, y: 115 },
                { x: 260, y: 25 },
                { x: 282, y: 80 }
              ].map((dot, i) => (
                <React.Fragment key={i}>
                  {/* Multi-layered Glow */}
                  <Circle cx={dot.x} cy={dot.y} r="10" fill="#E29393" opacity={0.1} />
                  <Circle cx={dot.x} cy={dot.y} r="7" fill="#E29393" opacity={0.2} />
                  {/* Core Dot */}
                  <Circle cx={dot.x} cy={dot.y} r="5" fill="white" stroke="#E29393" strokeWidth="2.5" />
                </React.Fragment>
              ))}
            </Svg>

            <View style={styles.xAxisLabels}>
              <Text style={styles.xAxisText}>Jan</Text>
              <Text style={styles.xAxisText}>Feb</Text>
              <Text style={styles.xAxisText}>Mar</Text>
              <Text style={styles.xAxisText}>Apr</Text>
              <Text style={styles.xAxisText}>May</Text>
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
    paddingHorizontal: 20,
    paddingVertical: 18, // Balanced padding
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12, // Reduced from 20
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },
  subtitle: {
    fontSize: 18,
    color: '#9CA3AF',
    marginTop: 0, // Reduced from 2
  },
  toggleContainer: {
    width: 104,
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toggleActive: {
    width: 50,
    height: 32,
    backgroundColor: '#000',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleInactive: {
    width: 50,
    height: 32,
    backgroundColor: '#F7F6F6',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleTextActive: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '600',
  },
  toggleTextInactive: {
    color: '#9CA3AF',
    fontSize: 11,
    fontWeight: '500',
  },
  chartWrapper: {
    marginTop: 0,
    position: 'relative',
    height: 180, // Container for background + svg + labels
  },
  chartBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 30,
    justifyContent: 'space-between',
    zIndex: 0,
  },
  gridLineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  yAxisText: {
    width: 25,
    fontSize: 14,
    color: '#9CA3AF',
    marginRight: 10,
  },
  dashedLine: {
    flex: 1,
    height: 1,
    borderBottomWidth: 1,
    borderColor: '#F3F4F6',
    borderStyle: 'dashed',
  },
  svgContainer: {
    paddingLeft: 35,
    marginTop: 0,
    width: 282 + 35,
  },
  xAxisLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    paddingLeft: 35, // Align with SVG start
    paddingRight: 10,
  },
  xAxisText: {
    fontSize: 14,
    color: '#9CA3AF',
    fontWeight: '500',
  }
});

export default BodyMetabolicTrends;
