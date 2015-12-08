# React-UI

#### Collection of simple react components

## Install
```sh
npm install --save react-ui-core
```

## Components
* [Alert](#alert)
* [Badge](#badge)
* [Button](#button)
* [BtnGroup](#btngroup)
* Image
* Label
* Loading
* Media
* Panel
* Form
  - Container
  - Group
  - Checkbox
  - Radio
  - Select
  - Input
  - Label
  - Static
  - Textarea
* Grid (12 column)
  - Container
  - Row
  - Col
* Navbar
  - Container
  - Menu
  - Link
  - Brand
  - Static
* Pager
* Table
  - Container
  - Row
  - Heading
  - Cell

## Usage

### Alert

```js
<UI.Alert message="Alert title here">
  simple text here
</UI.Alert>

// or

<UI.Alert>
  simple text here
</UI.Alert>
```

### Badge

```js
<UI.Badge kind="success">
  42
</UI.Badge>
```

Add any of the below mentioned kind modifier to change the appearance of the badge:
- primary
- success
- danger
- warning
- success
- info

### Button

```js
<UI.Button type="button" kind="primary" size="xs">
  button
</UI.Button>

// or

<UI.Button to="/link" kind="success" size="md">
  link
</UI.Button>

// or

<UI.Button block type="button" size="lg" kind="primary">
  button
</UI.Button>
```

Add any of the below mentioned modifier to change the appearance of the button:
* kind
  - primary
  - default
  - success
  - danger
  - warning
  - success
  - info
* size
  - xs
  - sm (default size)
  - md
  - lg
* block (to full width of the container)


### BtnGroup

```js
<UI.BtnGroup>
  <UI.Button type="button" kind="primary">button</UI.Button>
  <UI.Button type="button" kind="primary">button</UI.Button>
  <UI.Button type="button" kind="primary">button</UI.Button>
</UI.BtnGroup>
```
