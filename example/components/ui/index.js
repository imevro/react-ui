import ReactUI from 'react-ui';

// Custom styles
import styles from 'styles';

// Custom components, override supported!
import Button from './button';

// Init
const UI = ReactUI({
  styles,
  components: {
    Button: Button(styles.button),
  },
});

export default UI;
