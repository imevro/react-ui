// Default styles
import Default from './styles';

// Components
import Alert from './components/alert';
import Panel from './components/panel';
import Button from './components/buttons';
import Loading from './components/loading';

const defaultProps = {
  styles: Default,
  components: {},
};

export default function(props = defaultProps) {
  const { styles, components } = props;

  return {
    Alert: Alert(styles.alert),
    ...components,
    Panel: Panel(styles.panel),
    ...components,
    Button: Button(styles.button),
    ...components,
    Loading: Loading(styles.loading),
    ...components,
  };
}
