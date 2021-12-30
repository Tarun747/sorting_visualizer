import { createMuiTheme, colors } from '@material-ui/core'
import shadows from './shadows'
import typography from './typography'

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#FFFFFF',
      default: colors.common.white,
      paper: colors.common.white,
    },
    primary: {
      main: '#00e2e2',
    },
    secondary: {
      main: '#000',
    },
    text: {
      primary: colors.common.black,
      secondary: colors.common.secondary,
    },
  },
  shadows,
  typography,
})

export default theme
