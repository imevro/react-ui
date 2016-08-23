# React UI

Standard model of UI development

[![build status](https://img.shields.io/travis/jqestate/react-ui/master.svg?style=flat)](https://travis-ci.org/jqestate/react-ui)
[![npm version](https://img.shields.io/npm/v/@react-ui/core.svg?style=flat)](https://www.npmjs.com/package/@react-ui/core)


## Table Of Contents

* [Why?](#why)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [License](#license)


## Why?

When building React apps a multitude of components is created. They end up scattered across the project, making it hard to control and use them. React UI tries to solve the problem by encapsulating all of the components into a single dependency that is used across the app:

```jsx
import UI from 'src/components/ui';

const Header = () => (
  <section>
    <UI.Label>Press the button to greet everyone</UI.Label>
    <UI.Button kind="primary">Hello, GitHub!</UI.Button>
  </section>
);
```


## Usage
```sh
npm install --save @react-ui/core
```

Unlike other UI related libraries, React UI doesn't include any built-in components. It rather suggests a pattern for managing components in an app. So, let's create a React UI-compatible component:

```jsx
// src/components/ui/basic/button.jsx

import 'src/styles/button.css';

export default () => (props) => (
  <input type="button" className={`button-${props.kind}`}>
    {props.children}
  </input>
);
```

As you can see, the stateless component is wrapped by a function. It is used for passing [styles](/docs/styling.md) in more complex use cases (explained later in the docs).

React UI exports only a single function that is used for preparing UI for the app:

```javascript
// src/components/ui/index.js

import initUI from '@react-ui/core';
import Button from './button';
import Label from './label';

const components = {
  Button,
  Label,
};

const UI = initUI(components)();
export default UI;
```

React UI pattern revolves around the following three aspects:

  * single point of initialization

  * [styles are passed to components](/docs/styling.md) as a parameter, thus, easing UI theming

  * [UI components can be grouped in layers](/docs/layers.md), where a given layer has access to the components of parent layers. This exact property helps to achieve the proper UI composition.


## Roadmap

* docs and examples;
* core components (as a separate repository);
* styleguide generator;

If you have a suggestion, please, [create an issue](https://github.com/jqestate/react-ui/issues/new).


## License

Apache License, Version 2.0
