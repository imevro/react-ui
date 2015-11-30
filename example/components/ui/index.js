import ReactUI from 'react-ui';

// Custom styles
import styles from 'styles';

// Custom components, override supported!
import Pager from './pager';

// Init
const UI = ReactUI({
  styles,
  components: {
    Pager: Pager(styles.pager),
  },
});

export default UI;
