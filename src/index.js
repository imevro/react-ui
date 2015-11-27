import Alert from './components/alert';
import Panel from './components/panel';
import Button from './components/button';
import Loading from './components/loading';
import Label from './components/label';
import Badge from './components/badge';
import Grid from './components/grid';
import Image from './components/image';
import Table from './components/table';
import Form from './components/form';
import Media from './components/media';
import BtnGroup from './components/btngroup';

export default function(props = {}) {
  const { styles = {}, components = {} } = props;

  return {
    Alert: Alert(styles.alert),
    Panel: Panel(styles.panel),
    Button: Button(styles.button),
    BtnGroup: BtnGroup(styles.button),
    Loading: Loading(styles.loading),
    Label: Label(styles.label),
    Badge: Badge(styles.badge),
    Image: Image(styles.image),
    Media: Media(styles.media),

    Table: {
      Container: Table.Container(styles.table),
      Row: Table.Row(styles.table),
      Cell: Table.Cell(styles.table),
      Heading: Table.Heading(styles.table),
    },

    Form: {
      Container: Form.Container(styles.form),
      Group: Form.Group(styles.form),
      Input: Form.Input(styles.form),
      Textarea: Form.Textarea(styles.form),
      Label: Form.Label(styles.form),
      Checkbox: Form.Checkbox(styles.form),
      Radio: Form.Radio(styles.form),
      Select: Form.Select(styles.form),
      Static: Form.Static(styles.form),
    },

    Grid: {
      Container: Grid.Container(styles.grid),
      Row: Grid.Row(styles.grid),
      Col: Grid.Col(styles.grid),
    },

    ...components,
  };
}
