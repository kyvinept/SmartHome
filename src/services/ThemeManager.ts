import {Colors, Images} from '../styles';

let isDark = false;

export const setIsDark = (newIsDark: boolean) => {
  isDark = newIsDark;
};

export const useTheme = () => {
  return {
    isDark: isDark,
    colors: getCurrentColors(),
    images: getCurrentImages(),
  };
};

export const getCurrentTheme = () => {
  if (isDark) {
    return 'dark';
  }

  return 'light';
};

export const getCurrentColors = () => {
  switch (getCurrentTheme()) {
    case 'dark':
      return Colors.darkTheme;
    case 'light':
      return Colors.lightTheme;
  }
};

export const getCurrentImages = () => {
  switch (getCurrentTheme()) {
    case 'dark':
      return Images.darkTheme;
    case 'light':
      return Images.lightTheme;
  }
};

export const backgroundColor = (color: string) => {
  return {backgroundColor: color};
};

export const shadowColor = (color: string) => {
  return {shadowColor: color};
};

export const borderColor = (color: string) => {
  return {borderColor: color};
};

export const color = (color: string) => {
  return {color: color};
};
