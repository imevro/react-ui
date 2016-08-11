# Styling

## Basics

One of the important aspects of React UI is how styles are provided to components.

First, styles must be declared. We use CSS Modules along with [`css-loader`](https://github.com/webpack/css-loader) ([configuration example](#example)) to declare and import styles:

```css
/* src/styles/ui/button.css */

.btn {
  display: inline-block;
  border-radius: 2px;
  background-color: transparent;

  &:hover,
  &:active {
    outline: none;
    background-color: green;
  }
}
```

`styles` object is then prepared and passed to initialization function:

```javascript
// src/components/ui/index.js

import ReactUI from '@react-ui/core';

import Button from 'src/components/ui/basic/button';
import Label from 'src/components/ui/basic/label';

import buttonStyles from 'src/styles/button.css';
import labelStyles from 'src/styles/label.css';

const styles = {
  button: buttonStyles,
  label: labelStyles,
};

const components = {
  Button,
  Label,
};

const UI = ReactUI(styles)(components);
```

React UI pushes styles to all of the components, which, in turn, decide how exactly styles should be applied:

```javascript
// src/components/ui/basic/button.jsx

import cn from 'classnames';

export default (styles = {}) => {
  return class extends Component {
    render() {
      const { children } = this.props;
      const className = cn(styles.btn, this.props.className);

      return (
        <button className={className}>
          {children}
        </button>
      );
    }
  }
}
```


## Details

The important thing here is that `styles` object itself can be **anything**! You're free to choose what's appropriate for the given project - be it CSS Modules, styles as plain objects or even a function. This also creates an interesting use case for handling components theming.

Another aspect is that component has access to **all** of the styles (the initial `styles` object is provided without modification). This technique might seem sneaky, but it makes it possible to combine styles when building [composed components](/docs/layers.md).
