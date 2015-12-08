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
* [Image](#image)
* [Label](#label)
* [Loading](#loading)
* [Media](#media)
* [Panel](#panel)
* [Form](#form)
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

Please remember, that we use rem units for all our component

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

---------------------------------------

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
- default

---------------------------------------

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

---------------------------------------

### BtnGroup

BtnGroup is simple as possible
```js
<UI.BtnGroup>
  <UI.Button type="button" kind="primary">button</UI.Button>
  <UI.Button type="button" kind="primary">button</UI.Button>
  <UI.Button type="button" kind="primary">button</UI.Button>
</UI.BtnGroup>
```

---------------------------------------

### Image

```js
<UI.Image src="//" kind="circle" width="64" height="64" />

// or

<UI.Image src="//" responsive kind="rounded" width="128" height="128" />

// or

<UI.Image src="//" responsive width="128" height="128" />

```

Add any of the below mentioned modifier to change the appearance of the image:
* kind
  - circle (notice, for perfect circle you need to provide square image)
  - rounded
  - bordered
* responsive (full width of the container)

---------------------------------------

### Label

```js
<UI.Label kind="success">
  Label text here
</UI.Label>
```

Add any of the below mentioned kind modifier to change the appearance of the label:
- primary
- success
- danger
- warning
- success
- info
- default

---------------------------------------

### Loading

```js
this.state = {
  loading: false, // use state to set loading
};

<UI.Loading />
```

---------------------------------------

### Media

Media displays a media object (images or any what you want) to the left or right of a content block.

```js
<UI.Media
  left={<UI.Image src="//" width="64" height="64" />}
  body={<div>your component here</div>}
/>

// or

<UI.Media
  left={<UI.Image src="//" width="64" height="64" />}
  body={<div>your component here</div>}
  right={<UI.Image src="//" width="64" height="64" />}
/>

// or

<UI.Media
  body={<div>your component here</div>}
  right={<UI.Image src="//" width="64" height="64" />}
/>

```

---------------------------------------

### Panel

By default, Panel apply some basic background-color and padding to contain some content.
This component use media-queries

```js
<UI.Panel size="sm">
  content here
</UI.Panel>
```

Add any of the below mentioned size modifier to change the appearance of the panel:
* size
  - xs
  - sm

---------------------------------------

### Form

**Example for Form.Container, Form.Group, Form.Input**

```js
<UI.Grid.Row>
  <UI.Form.Container>
    <UI.Form.Group horizontal size="sm" kind="success">

      <UI.Grid.Col xs="4">
        <UI.Form.Label>Email</UI.Form.Label>
      </UI.Grid.Col>

      <UI.Grid.Col xs="4">
        <UI.Form.Input placeholder="Email" />
      </UI.Grid.Col>

      <UI.Grid.Col xs="4">
        <UI.Form.Static>Text</UI.Form.Static>
      </UI.Grid.Col>

    </UI.Form.Group>
  </UI.Form.Container>
</UI.Grid.Row>

// or

<UI.Form.Container>
  <UI.Form.Group>
    <UI.Form.Label>Name</UI.Form.Label>
    <UI.Form.Input placeholder="Name" />
  </UI.Form.Group>
  <UI.Form.Group>
    <UI.Form.Label>Email</UI.Form.Label>
    <UI.Form.Input placeholder="Email" />
  </UI.Form.Group>
</UI.Form.Container>

// or

<UI.Form.Container>
  <UI.Form.Group>
    <UI.Form.Label block>Name</UI.Form.Label>
    <UI.Form.Input block placeholder="Name" />
  </UI.Form.Group>
  <UI.Form.Group>
    <UI.Form.Label>Email</UI.Form.Label>
    <UI.Form.Input placeholder="Email" />
  </UI.Form.Group>
</UI.Form.Container>

```

#### Form.Group

Add any of the below mentioned modifier to change the appearance of the form group:
* size (modify padding for label, formControl and static)
  - xs
  - sm
  - lg
* kind
  - success
  - error
  - warning
* horizontal (notice, that label, static and input modify to display: block)

#### Form.Label

Add block modifier to change the appearance of the label:

* block (modify label to display block and have 100% width of the container)
