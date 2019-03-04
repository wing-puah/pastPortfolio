import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const drawerNavLinks = [
  {
    icon: "",
    url: "https://github.com/wing-puah",
    text: "Github"
  },
  {
    icon: "",
    url: "https://www.linkedin.com/in/puahhuiying/",
    text: "LinkedIn"
  },
  {
    icon: "",
    url: "https://medium.com/@wingpuah",
    text: "Medium"
  },
  {
    icon: "",
    url: "https://codepen.io/wing-p",
    text: "Codepen"
  },
  {
    icon: "",
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

    const sideList = (
      <div className={classes.list}>
        <List>
          {drawerNavLinks.map((data, index) => (
            <a href={data.url} target="_blank">
              <ListItem button key={data.text}>
                <ListItemText primary={data.text} />
              </ListItem>
            </a>
          ))}
        </List>
        <Divider />
      </div>
    );

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
            {sideList}
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
