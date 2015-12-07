import ReactUI from 'react-ui';

// Custom styles
import styles from 'styles';

import Toastr from './toastr';

// Init
const UI = ReactUI({
  styles,
  components: {
    Toastr: Toastr(styles.toastr),
  },
});

export default UI;
