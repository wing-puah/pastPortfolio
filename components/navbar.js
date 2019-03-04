import Link from 'next/link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styled from 'styled-components';

import LeftDrawer from './drawer';

const Nav = styled.a`
  color: #222;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #555;
  }
`;

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar className="row justify-content-between mr-4">
        <LeftDrawer />
        <Link href="/">
          <Nav>Home</Nav>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
