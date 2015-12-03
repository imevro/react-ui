import ReactUI from 'react-ui';

// Custom styles
import styles from 'styles';

// Custom components, override supported!
import Icon from './icon';

// Init
const UI = ReactUI({
  styles,
  components: {
    Icon: Icon(styles.icon),
  },
});

export default UI;
