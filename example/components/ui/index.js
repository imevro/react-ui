import ReactUI from 'react-ui';

// Custom styles
import styles from 'styles';

// Custom components, override supported!
import Navbar from './navbar';
import Link from './link';
import Menu from './menu';
import Static from './static';
import Brand from './brand';

// Init
const UI = ReactUI({
  styles,
  components: {
    Navbar: Navbar(styles.navbar),
    Link: Link(styles.navbar),
    Menu: Menu(styles.navbar),
    Static: Static(styles.navbar),
    Brand: Brand(styles.navbar),
  },
});

export default UI;
