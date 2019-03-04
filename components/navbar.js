import Link from 'next/link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import LeftDrawer from './drawer';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar className="row justify-content-between mr-4">
        <LeftDrawer />
        <Link href="/">
          <Button>Home</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
