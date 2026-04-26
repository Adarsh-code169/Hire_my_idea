import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, Defs, LinearGradient as SvgGradient, Stop } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { STYLES } from '../theme';

const cardWidth = 343;
const cardHeight = 376;

const describeArc = (cx, cy, r, startAngle, endAngle) => {
  const polarToCartesian = (cx, cy, r, angle) => {
    const rad = ((angle - 90) * Math.PI) / 180.0;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  };

  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  return `
    M ${start.x} ${start.y}
    A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}
  `;
};

const TopSymptoms = () => {
  return (
    <View style={styles.container}>
      <Text style={STYLES.sectionTitle}>Body Signals</Text>

      <View style={[styles.cardContainer, { width: cardWidth, height: cardHeight }]}>
        
        <View style={styles.header}>
          <Text style={styles.cardTitle}>Symptom Trends</Text>
          <Text style={styles.cardSubtitle}>Compared to last cycle</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.chartWrapper}>

            <Svg width={220} height={220} viewBox="-10 -10 220 220">

              <Defs>
                {/* RIGHT (Purple) - Bloating */}
                <SvgGradient id="g1" x1="100%" y1="0%" x2="0%" y2="100%">
                  <Stop offset="0%" stopColor="#B4A8DA" />
                  <Stop offset="100%" stopColor="#F5F2FF" />
                </SvgGradient>

                {/* BOTTOM RIGHT (Pink) - Fatigue */}
                <SvgGradient id="g2" x1="100%" y1="100%" x2="0%" y2="0%">
                  <Stop offset="0%" stopColor="#E99597" />
                  <Stop offset="100%" stopColor="#FFE4E4" />
                </SvgGradient>

                {/* BOTTOM LEFT (Green) - Acne */}
                <SvgGradient id="g3" x1="0%" y1="100%" x2="100%" y2="0%">
                  <Stop offset="0%" stopColor="#6E8C82" />
                  <Stop offset="100%" stopColor="#ECFFF9" />
                </SvgGradient>

                {/* TOP LEFT (Light Pink) - Mood */}
                <SvgGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <Stop offset="0%" stopColor="#FFF1F1" />
                  <Stop offset="100%" stopColor="#F4C3C4" />
                </SvgGradient>
              </Defs>

              {/* 31% Bloating */}
              <Path
                d={describeArc(100, 100, 75, 0, 111.6)}
                stroke="url(#g1)"
                strokeWidth={45}
                fill="none"
              />

              {/* 21% Fatigue */}
              <Path
                d={describeArc(100, 100, 75, 111.6, 187.2)}
                stroke="url(#g2)"
                strokeWidth={45}
                fill="none"
              />

              {/* 17% Acne */}
              <Path
                d={describeArc(100, 100, 75, 187.2, 248.4)}
                stroke="url(#g3)"
                strokeWidth={45}
                fill="none"
              />

              {/* 30% Mood */}
              <Path
                d={describeArc(100, 100, 75, 248.4, 360)}
                stroke="url(#g4)"
                strokeWidth={45}
                fill="none"
              />

            </Svg>

            {/* LABELS */}
            <View style={[styles.labelBadge, styles.badgeBloating]}>
              <Text style={styles.badgePercent}>31%</Text>
              <Text style={styles.badgeText}>Bloating</Text>
            </View>

            <View style={[styles.labelBadge, styles.badgeMood]}>
              <Text style={styles.badgePercent}>30%</Text>
              <Text style={styles.badgeText}>Mood</Text>
            </View>

            <View style={[styles.labelBadge, styles.badgeAcne]}>
              <Text style={styles.badgePercent}>17%</Text>
              <Text style={styles.badgeText}>Acne</Text>
            </View>

            <View style={[styles.labelBadge, styles.badgeFatigue]}>
              <Text style={styles.badgePercent}>21%</Text>
              <Text style={styles.badgeText}>Fatigue</Text>
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
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1D23',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartWrapper: {
    position: 'relative',
    width: 220,
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelBadge: {
    position: 'absolute',
    backgroundColor: '#FFF',
    width: 66,
    height: 66,
    borderRadius: 33,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  badgePercent: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1A1D23',
  },
  badgeText: {
    fontSize: 11,
    color: '#000',
    marginTop: 0,
  },
  badgeBloating: {
    top: 30,
    right: -10,
  },
  badgeMood: {
    top: -5,
    left: -5,
  },
  badgeAcne: {
    bottom: 5,
    left: -15,
  },
  badgeFatigue: {
    bottom: -15,
    right: 15,
  }
});

export default TopSymptoms;