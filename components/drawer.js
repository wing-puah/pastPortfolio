import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const drawerNavLinks = [
  {
    icon: "zmdi-github",
    url: "https://github.com/wing-puah",
    text: "Github"
  },
  {
    icon: "zmdi-linkedin-box",
    url: "https://www.linkedin.com/in/puahhuiying/",
    text: "LinkedIn"
  },
  {
    icon: "zmdi-collection-item",
    url: "https://medium.com/@wingpuah",
    text: "Medium"
  },
  {
    icon: "zmdi-codepen",
    url: "https://codepen.io/wing-p",
    text: "Codepen"
  },
  {
    icon: "zmdi-face",
    url: "https://www.thegeekwing.com/about-wing",
    text: "The Geek Wing"
  }
]

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

const SideList = (props) => (
  <nav {...props}>
    <List>
      {drawerNavLinks.map((data, index) => (
        <a href={data.url} target="_blank" key={data.text}>
          <ListItem button>
            <ListItemIcon>
              <i className={`zmdi ${data.icon}`}></i>
            </ListItemIcon>
            <ListItemText primary={data.text} />
          </ListItem>
        </a>
      ))}
    </List>
    <Divider />
  </nav>
);

class LeftDrawer extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (open) => () => {
    this.setState({
      left: open,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <IconButton
          color="inherit"
          aria-label="Menu"
          onClick={this.toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <SideList className={classes.list}/>
          </div>
        </Drawer>
      </Fragment>
    );
  }
}

LeftDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftDrawer);
