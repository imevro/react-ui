# React UI

Standard model of UI development


## Table Of Contents

* [Why?](#why)
* [Installation](#installation)
* [Usage](#usage)
* [Declaring Components](#declaring-components)
* [Roadmap](#roadmap)
* [License](#license)


## Why?

When building React apps a multitude of components is created. They end up scattered across the project, making it hard to control and use them. React UI tries to solve the problem by encapsulating all of the components into a single dependency that is used across the app:

```javascript
import UI from 'src/components/ui';

class GreetingButton extends Component {
  render() {
    return (
      <section>
      	<UI.Label>Press the button to greet everyone</UI.Label>
      	<UI.Button kind="primary">Hello, GitHub!</UI.Button>
      </section>
    );
  }
}
```


## Installation

```sh
npm install --save @react-ui/core
```

## Usage

Unlike other UI related libraries, React UI doesn't include any built-in components. It rather suggests a pattern for managing components in an app. In fact, React UI exports only a single function that is used for preparing UI for your app:

```javascript
// src/components/ui/index.js

import initUI from '@react-ui/core';
import Button from './button';
import Label from './label';

const components = {
  Button,
  Label,
}

const UI = initUI(components)();
export default UI;
```

React UI pattern revolves around the following three aspects:

  * single point of initialization

  * [styles are passed to components](/docs/styling.md) as a parameter, thus, easing UI theming

  * [UI components can be grouped in layers](/docs/layers.md), where a given layer has access to the components of parent layers. This exact property helps to achieve the proper UI composition.


## Declaring Components

Components that are passed to `initUI` must be wrapped in a function call that accepts `styles` passed during UI creation:

```jsx
// src/components/ui/basic/button.jsx

import cn from 'classnames';

export default (styles = {}) => {
  return (props) => {
    const { children } = props;
    const className = cn(styles.button, props.className);

    return (
      <button className={className}>
        {children}
      </button>
    );
  }
}
```

The components are then grouped together and passed as an object to `initUI`:

```javascript
// src/components/ui/index.js

import initUI from '@react-ui/core';
import Button from './button';
import Label from './label';

const components = {
  Button,
  Label,
}

const UI = initUI(components)();
export default UI;
```

## Roadmap

* docs and examples;
* core components (as a separate repository);
* styleguide generator;

If you have a suggestion, please, [create an issue](https://github.com/jqestate/react-ui/issues/new).


## License

Apache License, Version 2.0
