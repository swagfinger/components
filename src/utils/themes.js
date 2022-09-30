import { blue, neutral, yellow, green, red } from './colors';

const commonStyles = {
  status: {
    color: neutral[100],
    warningBackgroundColor: yellow[100],
    warningBackgroundColorHover: yellow[200],
    warningBackgroundColorActive: yellow[300],

    errorBackgroundColor: red[100],
    errorBackgroundColorHover: red[200],
    errorBackgroundColorActive: red[300],

    successBackgroundColor: green[100],
    successBackgroundColorHover: green[200],
    successBackgroundColorActive: green[300]
  }
};

export const defaultTheme = {
  name: 'defaultTheme',
  ...commonStyles,

  disabledColor: neutral[300],
  disabledBackgroundColor: neutral[200],
  formElementBackground: neutral[100],
  textOnFormElementBackground: neutral[600],
  textFieldBackground: neutral[200],
  textFieldLabelColor: neutral[500],

  default: {
    color: neutral[400],
    colorInverted: neutral[100],
    borderColor: neutral[300],
    backgroundColor: neutral[100],
    backgroundColorHover: neutral[200],
    backgroundColorActive: neutral[300]
  },

  primary: {
    color: neutral[100],
    colorInverted: neutral[100],
    borderColor: blue[100],
    backgroundColor: blue[300],
    backgroundColorHover: blue[200],
    backgroundColorActive: blue[100]
  },

  secondary: {
    color: blue[300],
    colorInverted: neutral[100],
    borderColor: blue[100],
    backgroundColor: blue[300],
    backgroundColorHover: blue[200],
    backgroundColorActive: blue[100]
  },

  tertiary: {
    color: blue[300],
    colorInverted: neutral[100],
    borderColor: blue[100],
    backgroundColor: blue[300],
    backgroundColorHover: blue[200],
    backgroundColorActive: blue[100]
  }
};

export const darkTheme = {
  name: 'darkTheme',
  ...commonStyles,

  disabledColor: neutral[400],
  disabledBackgroundColor: neutral[300],
  formElementBackground: blue[100],
  textOnFormElementBackground: neutral[100],
  textFieldBackground: neutral[600],
  textFieldLabelColor: neutral[100],

  default: {
    color: neutral[600],
    colorInverted: neutral[100],
    borderColor: neutral[300],
    backgroundColor: neutral[100],
    backgroundColorHover: neutral[200],
    backgroundColorActive: neutral[300]
  },

  primary: {
    color: neutral[100],
    colorInverted: neutral[600],
    backgroundColor: blue[300],
    backgroundColorHover: neutral[200],
    backgroundColorActive: neutral[300]
  },

  secondary: {
    color: neutral[100],
    colorInverted: neutral[600],
    backgroundColor: blue[300],
    backgroundColorHover: neutral[200],
    backgroundColorActive: neutral[300]
  },

  tertiary: {
    color: neutral[100],
    colorInverted: neutral[600],
    backgroundColor: blue[300],
    backgroundColorHover: neutral[200],
    backgroundColorActive: neutral[300]
  }
};
