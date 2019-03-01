import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Navbar from './navbar';
import theme from './styles/theme';

const Layout = (props) => (
  <MuiThemeProvider theme={theme}>
    <Fragment>
      <Navbar />
      <section className="container">
        { props.children }
      </section>
    </Fragment>
  </MuiThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
