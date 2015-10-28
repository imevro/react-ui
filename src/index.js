// Default styles
import Default from './styles';

// Components
import Alert from './components/alert';
import Panel from './components/panel';
import Button from './components/buttons';
import Loading from './components/loading';
import Label from './components/label';
import Badges from './components/badges';
import { Container, Row, Col } from './components/grid';
import Image from './components/images';
import Table from './components/table';

const defaultProps = {
  styles: Default,
  components: {},
};

export default function(props = defaultProps) {
  const { styles, components } = props;

  return {
    Alert: Alert(styles.alert),
    Panel: Panel(styles.panel),
    Button: Button(styles.button),
    Loading: Loading(styles.loading),
    Label: Label(styles.label),
    Badges: Badges(styles.badges),
    Image: Image(styles.images),

    Table: {
      Container: Table.Container(styles.table),
      Row: Table.Row(styles.table),
      Cell: Table.Cell(styles.table),
      Heading: Table.Heading(styles.table),
    },

    Container: Container(styles.grid),
    Row: Row(styles.grid),
    Col: Col(styles.grid),
    ...components,
  };
}
