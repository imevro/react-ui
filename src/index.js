// Default styles
import Default from './styles';

// Components
import Alert from './components/alert';

export default function({ styles = Default, components = {} }) {
  return {
    Alert: Alert(styles.alert),
    ...components,
  };
}
