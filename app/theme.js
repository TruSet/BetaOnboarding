import {createMuiTheme} from '@material-ui/core/styles'

const charcoalBlack = '#21272b'
const grey = '#6f7273'
const hunterGreen = '#3b9043'
const yellow = 'rgb(254, 192, 23)'
const red = 'rgb(241, 90, 92)'
const teal = 'rgb(0, 176, 148)'
const blue = 'rgb(61, 151, 211)'

export default createMuiTheme({
  custom: {
    defaultTitleHeight: 450
  },
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: hunterGreen,
    },
    secondary: {
      main: charcoalBlack,
    },
    accent: {yellow, red, teal, blue},
    text: {
      primary: charcoalBlack,
      secondary: grey,
    }
  },
  typography: {
    fontFamily: [
      'Glober',
      'Muli',
      'Asap',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
    fontSize: 14,
    title: {
      fontFamily: 'Asap, Muli, Roboto, Helvetica, sans-serif',
      fontWeight: 700,
    },
    display1: {
      fontFamily: 'Asap, Roboto, Helvetica, sans-serif',
      fontWeight: 700,
      color: hunterGreen,
    },
    display2: {
      fontFamily: 'Asap, Roboto, Helvetica, sans-serif',
      fontWeight: 700,
      fontStyle: 'italic',
      color: hunterGreen,
    },
    body1: {
      fontFamily: 'Muli, Roboto, sans-serif',
      fontWeight: 300,
      color: charcoalBlack
    },
    body2: {
      fontFamily: 'Muli, Helvetica, sans-serif',
      fontWeight: 300,
      color: grey
    },
    button: {
      fontFamily: 'Asap, Muli, Helvetica, sans-serif',
      textTransform: 'uppercase',
      fontWeight: 700,
    }
  },
  overrides: {} // MuiButton: { root: { fontFamily: 'Muli' } } etc.
})
