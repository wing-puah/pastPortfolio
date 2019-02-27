import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import amber from '@material-ui/core/colors/amber';
import teal from '@material-ui/core/colors/teal';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: {
      light: teal[100],
      main: teal[300],
      dark: teal[800],
    },
    error: red,
    contrastThreshold: 3,
    background: {
      default: grey[200],
    },
  },
  typography: {
    htmlFontSize: 10,
    fontSize: 14,
    subheading: {
      fontSize: 12,
    },
    caption: {
      fontSize: 14,
    },
    button: {
      fontSize: 12,
    },
    useNextVariants: true,
  },
});

export default theme;
