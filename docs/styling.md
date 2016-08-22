# Styling

## Basics

One of the important aspects of React UI is how styles are provided to components.

We use [`css-loader`](https://github.com/webpack/css-loader) in CSS Modules mode to declare and import styles. The following steps should be taken to use the same approach:

1. Install `css-loader`:

  ```sh
  npm install --save-dev css-loader
  ```

2. Add settings to webpack configuration file:

  ```javascript
  loaders: [
    { test: /\.css$/, loader: `style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]` },
  ],
  ```

3. Declare styles in CSS files:

  ```css
  /* src/styles/ui/button.css */

  .default {
    display: inline-block;
    border-radius: 2px;
    background-color: transparent;
  }

  .primary {
    compose: default;
    background-color: blue;
  }

  .cancel {
    compose: default;
    background-color: red;
  }
  ```

  ```css
  /* src/styles/ui/label.css */

  .default {
    color: green;
    background-color: white;
  }
  ```

4. Prepare `styles` object with keys matching the names of components. Then pass this object to the initialization function:

  ```javascript
  // src/components/ui/index.js

  import initUI from '@react-ui/core';

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

  const UI = initUI(components)(styles);

  export default UI;
  ```

React UI pushes the corresponding styles to every component, which, in turn, decides how exactly styles should be applied:

```javascript
// src/components/ui/basic/button.jsx

import cn from 'classnames';

export default (styles = {}) => {
  return class extends Component {
    render() {
      const { children } = this.props;
      const className = cn(styles.default, this.props.className);

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

The important thing here is that `styles` can be **anything**! You're free to choose what's appropriate for the given project — be it CSS Modules, styles as plain objects or even a function. It's possible to omit `styles` parameter whatsoever in case a global styling approach is chosen (importing styles directly in the component's file).

In general, we recommend to construct `styles` object and pass it to the initialization function. It creates a useful precedent for handling components theming.
