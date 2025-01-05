import {StyleSheet} from 'react-native';

export const globalColors = {
  primary: '#7037EB',
  secondary: '#F72585',
  tertiary: '#3A0CA3',
  success: '#4CC9F0',
  warning: '#FCA311',
  danger: '#E71D36',
  dark: '#22223B',

  background: '#FFF',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalColors.background,
    padding: 20,
  },
  primaryButton: {
    backgroundColor: globalColors.primary,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: globalColors.background,
    fontSize: 18,
  },
});
