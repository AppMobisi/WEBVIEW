// import { lightDarkColor, contrastTextColor } from '@/utils/themeColor'

export default {
  colors: {
    base: {
      black: '#000000',
      white: '#FFFFFF',
      lightGray: '#F4F4F6',
      gray002: '#EEEEEE',
      gray001: '#DDDDDD',
      loginGray: "DCDCDC",
      gray: '#CCCCCC',
      gray100: '#F2F3F9',
      gray200: '#A4A4A4',
      gray300: '#5d5d5f',
      grayOpacite: 'rgba(196, 196, 196, 0.2)',
      red: '#FF0000',
      blue001: '#ACDAFF',
      blue002: '#10284A',
      blue: '#0091ff',
      darkBlue: '#001489',
      lighterBlue: '#D0DBEA',
      shadow: {
        alpha1: 'rgba(0, 0, 0, 0.1)',
        alpha2: 'rgba(0, 0, 0, 0.2)',
        blue1: 'rgba(16, 40, 74, 0.6)'
      },
      border: '#E5E5E5',
      breadcrumbs: '#FAF9F8'
    },
    font: {
      main: '#F5F5F5',
      dark: '#505050',
      light: 'rgba(80, 80, 80, 0.5)',
      error: '#5F2120',
      warning: '#653C01',
      success: '#1D4620',
      info: '#024360',
      pageTitle: '#050152',
      title: '#363636',
      disabled: 'rgba(0, 0, 0, 0.38)'
    },
    icon: {
      error: '#FF5252',
      warning: '#FB8C00',
      success: '#4CAF50',
      info: '#2196F3'
    },
    alert: {
      error: '#FCEDEC',
      warning: '#FFF4E5',
      success: '#EDF7ED',
      info: '#E5F5FD'
    },
    primary: {
      main: '#1976D2',
    },
    secondary: {
      main: '#00C7C0',
    },
    tertiary: {
      main: '#FE9210',
    },
    warning: {
      main: '#FB8C00',
    },
    error: {
      main: '#FF5252',
    },
    info: {
      main: '#2196F3',
    },
    success: {
      main: '#4CAF50',
    }
  },
  typograph: {
    fontsize: {
      minimum: '1rem',
      medium: '1.2rem',
      base: '1.4rem',
      body1: '1.6rem',
      body2: '1.8rem',
      pageTab: '2rem',
      subtitle: '2.2rem',
      title: '2.4rem',
      bigTitle: '3rem'
    },
    fontFamily: {
      base: 'Poppins',
      secondary: 'Roboto'
    }
  },
  layout: {
    borderRadius: {
      small: '0.5rem',
      medium: '1rem',
      big: '2rem'
    },
    iconSize: {
      small: '1.5rem',
      button: '2rem',
      medium: '2.5rem',
      big: '3rem'
    },
    margin: {
      base: 0.8,
      small: '0.8rem',
      medium: '1.6rem',
      big: '2.4rem'
    },
    padding: {
      base: 0.8,
      small: '0.8rem',
      medium: '1.6rem',
      big: '2.4rem'
    },
    gap: {
      base: 0.8,
      small: '0.8rem',
      medium: '1.6rem',
      big: '2.4rem'
    },
    lineHeight: {
      base: 0.8,
      small: '0.8rem',
      medium: '1.6rem',
      big: '2.4rem'
    },
    defaultSpacing: {
      base: 0.8,
      small: '0.8rem',
      medium: '1.6rem',
      big: '2.4rem'
    }
  },
  screen: {
    large: '1280px',
    medium: '980px',
    small: '767px',
    xsmall: '540px'
  }
} as const
