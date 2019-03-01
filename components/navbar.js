import Link from 'next/link'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styled from 'styled-components';

import LeftDrawer from './drawer';


const Nav = styled.a`
  color: #222;
  color: white;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

function Navbar (props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <LeftDrawer />
        <Link href="/">
          <Nav>Home</Nav>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;
