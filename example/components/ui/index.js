import ReactUI from 'react-ui';

// Custom styles
import styles from 'styles';

// Custom components, override supported!
import BtnGroup from './btngroup';

// Init
const UI = ReactUI({
  styles,
  components: {
    BtnGroup: BtnGroup(styles.button),
  },
});

export default UI;
