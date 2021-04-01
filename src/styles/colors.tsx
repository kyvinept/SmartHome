export interface ITheme {
  shadowBlack: string;
  white: string;
  gainsboro: string;
  dimGray: string;
  redButton: string;
  disabledRedButton: string;
  transparent: string;

  dimGrayWithOpacity: (opacity: number) => string;
}

export const lightTheme: ITheme = {
  shadowBlack: '#000',
  white: '#fff',
  gainsboro: '#DCDCDC',
  dimGray: '#696969',
  redButton: 'rgb(226, 112, 119)',
  disabledRedButton: '#F1AEB1',
  transparent: 'transparent',

  dimGrayWithOpacity: (opacity: number) =>
    'rgba(105, 105, 105,' + opacity + ')',
};

export const darkTheme: ITheme = {
  shadowBlack: '#000',
  white: '#fff',
  gainsboro: '#DCDCDC',
  dimGray: '#696969',
  redButton: 'rgb(226, 112, 119)',
  disabledRedButton: '#F1AEB1',
  transparent: 'transparent',

  dimGrayWithOpacity: (opacity: number) =>
    'rgba(105, 105, 105,' + opacity + ')',
};
