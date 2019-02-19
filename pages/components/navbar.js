import PropTypes from 'prop-types';
import Link from 'next/link'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  navLink: {
    paddingRight: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
  },
})

function Navbar (props) {
  const { classes } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <a className={classes.navLink}>Home</a>
        </Link>
        <Link href="/about">
          <a className={classes.navLink}>About</a>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
