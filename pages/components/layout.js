import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';

import Navbar from './navbar'

const styles = theme => ({
  body: {
    padding: theme.spacing.unit * 4,
    background: grey[200],
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function BodyContainer(props) {
  const { classes } = props;

  return (
   <div className={classes.body}{...props}>
     <Paper className={classes.root} elevation={1}>
       { props.children }
     </Paper>
   </div>
  );
}

const BodyContainerWithCss = withStyles(styles)(BodyContainer);

const Layout = (props) => (
  <div>
    <Navbar />
      <BodyContainerWithCss>
        { props.children }
      </BodyContainerWithCss>
  </div>
)

Layout.propTypes = {
  children: PropTypes.object.isRequired,
}

export { BodyContainer, BodyContainerWithCss }
export default Layout
