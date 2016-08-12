# Layers

React has come up with many important conclusions concerning UI development. One of those relates to **composability** of user interface elements.

Composability determines another important trait of UI, that is **hierarchy**. It's common when primitive components are used for constructing complex ones, which are used within even more complex components, and so on. React UI embraces this property and enables grouping components into meaningful UI **layers**.

## Usage

When building UI kit for your project it's always a good idea to draw the lines between layers of components. For example, primitives like `Icon`, `Button`, `Label` are perfect candidates for a separate layer. So, let's create it:

```javascript
// src/components/ui/primitiveLayer/index.js

import Icon from `./icon`;
import Button from `./button`;
import Label from `./label`;

export default {
  Icon,
  Button,
  Label,
};
```

As you can see a layer is just a simple object holding the components.

Now let's imagine a more complex layer and implement one of its components:

```javascript
// src/components/ui/complexLayer/index.js

import InfoButton from './infoButton';
import HelpButton from './helpButton';


export default {
  InfoButton,
  HelpButton,
};
```

```javascript
// src/components/ui/complexLayer/infoButton.jsx

export default (styles = {}, UI = {}) => {
  return class InfoButton extends Component {
    render() {
      return (
        <div>
          <UI.Icon kind="info" />
          <UI.Button {...this.props} />
        </div>
      );
    }
  }
}
```

That's where React UI comes in play. It passes `UI` object as the second argument to the component. This object holds every single component declared within _lower level_ layer. So, in our example, `InfoButton` would have access to `Icon`, `Button` and `Label`, but not `HelpButton` as it is located on the same level of hierarchy.

React UI also guarantees that the initialization of basic layers will be finished **before** _higher level_ components are going to access _lower level_ components.

The only thing that is left to do is to supply the created layers to React UI's init function:

```javascript
// src/components/ui/index.js

import initUI from '@react-ui/core';

import styles from 'src/styles'

import primitiveLayer from 'src/components/ui/primitiveLayer';
import complexLayer from 'src/components/ui/complexLayer';
import evenMoreComplexLayer from 'src/components/ui/evenMoreComplexLayer';

const UI = initUI(styles)(
  components,
  complexLayer,
  evenMoreComplexLayer,
);

export default UI;
```

Please, note that layers are passed in the ascending order of complexity (from primitive to complex).
