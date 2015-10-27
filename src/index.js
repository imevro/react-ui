import Default from './styles';

// Components
import Alert from './components/alert';

export default function(styles = Default) {
  return {
    Alert: Alert(styles),
  };
}
