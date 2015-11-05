import ReactUI from 'react-ui';

// Custom styles
import styles from 'styles';

// Custom components, override supported!
import Media from './media';

// Init
const UI = ReactUI({
  styles,
  components: {
    Media: Media(styles.media),
  },
});

export default UI;
