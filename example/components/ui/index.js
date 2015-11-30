import ReactUI from 'react-ui';

// Custom styles
import styles from 'styles';

// Custom components, override supported!
import Navbar from './navbar';
import Left from './left';
import Right from './right';
import Link from './link';
import Static from './static';

// Init
const UI = ReactUI({
  styles,
  components: {
    Navbar: Navbar(styles.navbar),
    Left: Left(styles.navbar),
    Right: Right(styles.navbar),
    Link: Link(styles.navbar),
    Static: Static(styles.navbar),
  },
});

export default UI;
