import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path, Rect, Circle, Line } from 'react-native-svg';
import { COLORS } from '../theme';

const HomeIcon = ({ active }) => (
  <Svg width="28" height="28" viewBox="0 0 24 24" fill={active ? COLORS.textPrimary : '#9CA3AF'}>
    <Path d="M12 2L3 9V20C3 21.1 3.9 22 5 22H9V15C9 13.3 10.3 12 12 12C13.7 12 15 13.3 15 15V22H19C20.1 22 21 21.1 21 20V9L12 2Z" />
  </Svg>
);

const TrackIcon = ({ active }) => (
  <Svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="9.5" stroke={active ? COLORS.textPrimary : '#9CA3AF'} strokeWidth="1.5" />
    <Circle cx="12" cy="12" r="7" fill={active ? COLORS.textPrimary : '#9CA3AF'} />
    <Path d="M12 12V8" stroke="#FFF" strokeWidth="1.8" strokeLinecap="round" />
    <Path d="M12 12L14.5 14.5" stroke="#FFF" strokeWidth="1.8" strokeLinecap="round" />
  </Svg>
);

const InsightsIcon = ({ active }) => (
  <Svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    {/* Bars */}
    <Rect x="4" y="15" width="3" height="5" fill={active ? COLORS.textPrimary : '#000'} />
    <Rect x="9" y="11" width="3" height="9" fill={active ? COLORS.textPrimary : '#000'} />
    <Rect x="14" y="14" width="3" height="6" fill={active ? COLORS.textPrimary : '#000'} />
    <Rect x="19" y="9" width="3" height="11" fill={active ? COLORS.textPrimary : '#000'} />
    {/* Horizontal Baseline */}
    <Line x1="2" y1="20" x2="22" y2="20" stroke={active ? COLORS.textPrimary : '#000'} strokeWidth="1.2" />
    {/* Line graph overlay - Shifted up to create a gap from the bars */}
    <Path d="M5.5 11 L10.5 7 L15.5 10 L20.5 5" stroke={active ? COLORS.textPrimary : '#000'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <Circle cx="5.5" cy="11" r="2.2" fill={active ? COLORS.textPrimary : '#000'} />
    <Circle cx="10.5" cy="7" r="2.2" fill={active ? COLORS.textPrimary : '#000'} />
    <Circle cx="15.5" cy="10" r="2.2" fill={active ? COLORS.textPrimary : '#000'} />
    <Circle cx="20.5" cy="5" r="2.2" fill={active ? COLORS.textPrimary : '#000'} />
  </Svg>
);

const BottomNav = ({ activeTab, onTabPress }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.capsule}>
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => onTabPress('home')}
        >
          <HomeIcon active={activeTab === 'home'} />
          <Text style={[styles.navText, activeTab === 'home' && styles.navTextActive]}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => onTabPress('track')}
        >
          <TrackIcon active={activeTab === 'track'} />
          <Text style={[styles.navText, activeTab === 'track' && styles.navTextActive]}>Track</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => onTabPress('insights')}
        >
          <InsightsIcon active={activeTab === 'insights'} />
          <Text style={[styles.navText, activeTab === 'insights' && styles.navTextActive]}>Insights</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.fab}>
        <Svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round">
          <Line x1="12" y1="5" x2="12" y2="19" />
          <Line x1="5" y1="12" x2="19" y2="12" />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 30,
    left: '50%',
    marginLeft: -171.5, // Half of 343
    width: 343,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  capsule: {
    width: 271,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 50,
  },
  navText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 4,
    fontWeight: '500',
  },
  navTextActive: {
    color: COLORS.textPrimary,
    fontWeight: '700',
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  }
});

export default BottomNav;
