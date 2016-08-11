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

When building React apps a multitude of components is created. They end up scattered across the project, making it hard to control and use them. React UI tries to solve that problem by encapsulating all of the components into a single dependency that can be used across the app:

```javascript
import UI from 'src/components/ui';

class SomeContainer extends Component {
  render() {
    return (
      <div>
      	<UI.Label>Hello, GitHub!</UI.Label>
      	<UI.Button caption="OK" />
      </div>
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
/* src/components/ui/index.js */

import ReactUI from '@react-ui/core';

import defaultStyles from 'src/styles/ui';
import basicComponents from 'src/components/ui/basic';

const UI = reactUI(defaultStyles)(
  basicComponents,
);

export default UI;
```

React UI pattern revolves around the following three aspects:

  * single point of initialization

  * styles are passed to components as a parameter, thus, easing UI theming

  * UI components can be grouped in layers, where a given layer has access to the components of parent layers. This exact property helps to achieve the proper UI composition.


## Declaring Components

Components that are passed to `ReactUI` must be wrapped in a function call that accepts `styles` passed during UI creation:

```javascript
/* src/components/ui/basic/button.jsx */

import cn from 'classnames';

export default (styles = {}) => {
  return class extends Component {
    render() {
      <div className={cn(styles.button, this.props.className)}>
        {this.props.children}
      </div>
    }
  }
}
```

The components are then grouped together and passed as an object to `ReactUI`:

```javascript
/* src/components/ui/index.js */

import Button from './basic/button';
import Label from './basic/label';

const components = {
  Button,
  Label,
};

const UI = ReactUI(styles)(components);
```


## Roadmap

* docs;
* core components (as a separate repository);
* styleguide generator;

If you have a suggestion, please, [create an issue](https://github.com/jqestate/react-ui/issues/new).


## License

Apache License, Version 2.0
