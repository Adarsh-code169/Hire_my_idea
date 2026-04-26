export const COLORS = {
  background: '#F8F9FB',
  cardBg: '#FFFFFF',
  textPrimary: '#1A1D23',
  textSecondary: '#6B7280',
  purple: '#A78BFA',
  purpleLight: '#E0D4FC',
  pink: '#FDA4AF',
  teal: '#8fd1b5',
  tealDark: '#0D9488',
  white: '#FFFFFF',
  black: '#000000',
  grayLight: '#F3F4F6',
  grayDark: '#9CA3AF'
};

export const STYLES = {
  card: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 24,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    marginBottom: 32, // Increased for better distribution
  },
  sectionTitle: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 16, // Increased for better distribution
    marginLeft: 4,
  }
};
