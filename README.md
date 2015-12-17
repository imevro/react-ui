# React-UI

#### Collection of simple react components

## Install
```sh
npm install --save @react-ui/core
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
* [Grid (12 column)](#grid)
  - Container
  - Row
  - Col
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
* [Navbar](#navbar)
  - Container
  - Menu
  - Link
  - Brand
  - Static
* [Pager](#pager)
* [Table](#table)
  - Container
  - Row
  - Heading
  - Cell

## Usage

Please remember, that we use rem units for all our component.

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

### Grid

```js
<UI.Grid.Container>
  <UI.Grid.Row>
    <UI.Grid.Col xs="12" sm="6" md="4">
      1
    </UI.Grid.Col>
    <UI.Grid.Col xs="12" sm="6" md="4">
      2
    </UI.Grid.Col>
    <UI.Grid.Col xs="12" sm="6" md="4">
      3
    </UI.Grid.Col>
  </UI.Grid.Row>

  <UI.Grid.Row>
    <UI.Grid.Col xs="6" xsOffset="3">
      1
    </UI.Grid.Col>
  </UI.Grid.Row>

  <UI.Row xs="between">
    <UI.Col xs="4">
      1
    </UI.Col>
    <UI.Col xs="4">
      2
    </UI.Col>
  </UI.Row>
  <UI.Row xs="center bottom">
    <UI.Col xs="4">
      1
    </UI.Col>
    <UI.Col xs="2">
      2
    </UI.Col>
  </UI.Row>
</UI.Grid.Container>
```
Container by default have fixed width, add \<UI.Grid.Container fluid> to be 100% width.

Add any of the below mentioned modifier to change number of the column:
* xs, sm, md, lg
  - from 1 to 12
* xsOffset, smOffset, mdOffset, lgOffset
  - from 1 to 12

Add any of the below mentioned modifier to row to change alignment of a column:
* xs, sm, md, lg
  - top, middle, bottom
  - start, center, end
  - around, between

---------------------------------------

### Form

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
  <UI.Form.Group>
    <UI.Form.Label>Select</UI.Form.Label>
    <UI.Form.Select kind="primary" placeholder="Placeholder" options={[
      { value: `one`, label: `one` },
      { value: `two`, label: `two` },
    ]} />
  </UI.Form.Group>
  <UI.Form.Group>
    <UI.Form.Label>Select</UI.Form.Label>
    <UI.Form.Select kind="primary" ranged placeholder="Placeholder" options={[
      { value: `one`, label: `one` },
      { value: `two`, label: `two` },
    ]} />
    <UI.Form.Select kind="primary" ranged placeholder="Placeholder" options={[
      { value: `one`, label: `one` },
      { value: `two`, label: `two` },
    ]} />
  </UI.Form.Group>
</UI.Form.Container>

// or

<UI.Form.Container>
  <UI.Form.Group>
    <UI.Form.Label block>Name</UI.Form.Label>
    <UI.Form.Input block kind="warning" placeholder="Name" />
  </UI.Form.Group>
  <UI.Form.Group>
    <UI.Form.Label block>Email</UI.Form.Label>
    <UI.Form.Input block kind="warning" placeholder="Email" />
  </UI.Form.Group>
  <UI.Form.Group>
    <UI.Form.Checkbox>First</UI.Form.Checkbox>
    <UI.Form.Checkbox>Second</UI.Form.Checkbox>
    <UI.Form.Checkbox>Third</UI.Form.Checkbox>
  </UI.Form.Group>
  <UI.Form.Group>
    <UI.Form.Radio name="radio">First</UI.Form.Radio>
    <UI.Form.Radio name="radio">Second</UI.Form.Radio>
    <UI.Form.Radio name="radio">Third</UI.Form.Radio>
  </UI.Form.Group>
  <UI.Form.Group>
    <UI.Form.Textarea kind="success" block rows="6" defaultValue="Don't forget to add row attribute" />
  </UI.Form.Group>
</UI.Form.Container>

// or
// Use this for float Label, but don't forget add required to any Input or Textarea
<UI.Form.Container>
  <UI.Form.Group float>
    <UI.Form.Input type="text" placeholder="Name" required />
    <UI.Form.Label>Name</UI.Form.Label>
  </UI.Form.Group>
</UI.Form.Container>
```

#### Group

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
* float (for float label)

#### Label

Add block modifier to change the appearance of the label:

* block (modify label to display block and have 100% width of the container)

#### Input

Add any of the below mentioned modifier to change the appearance of the form input:
* kind (modify border color)
  - primary (default)
  - success
  - danger
  - warning
  - info
* block


#### Select

```js
<UI.Form.Select kind="primary" placeholder="Placeholder" options={[
  { value: `one`, label: `one` },
  { value: `two`, label: `two` },
]} />

// or

<UI.Form.Select block kind="primary" placeholder="Placeholder" options={[
  { value: `one`, label: `one` },
  { value: `two`, label: `two` },
  { value: `three`, label: `three` },
]} />
```

Add any of the below mentioned modifier to change the appearance of the form input:
* kind (modify border color)
  - primary (default)
  - success
  - danger
  - warning
  - info
* block
* ranged
* options
  - array of a object (each object modify to select option)

#### Checkbox

Add inline modifier to change the appearance of the form checkbox:
* inline

#### Radio

Add inline modifier to change the appearance of the form radio:
* inline
* name (notice, that radio need to have the same name attribute for all inputs)

#### Textarea

Add any of the below mentioned modifier to change the appearance of the form textarea:
* kind (modify border color)
  - primary (default)
  - success
  - danger
  - warning
  - info
* block

---------------------------------------

### Navbar

```js
<UI.Navbar.Container>
  <UI.Navbar.Menu left>
    <UI.Navbar.Brand>Brand</UI.Navbar.Brand>
    <UI.Navbar.Link>Link</UI.Navbar.Link>
    <UI.Navbar.Static>Static</UI.Navbar.Static>
  </UI.Navbar.Menu>
  <UI.Navbar.Menu right>
    <UI.Navbar.Link>Link</UI.Navbar.Link>
    <UI.Navbar.Link>Link</UI.Navbar.Link>
    <UI.Navbar.Link>Link</UI.Navbar.Link>
  </UI.Navbar.Menu>
</UI.Navbar.Container>

// or

<UI.Navbar.Container fixed>
  <UI.Navbar.Menu left>
    <UI.Navbar.Brand>Brand</UI.Navbar.Brand>
    <UI.Navbar.Link>Link</UI.Navbar.Link>
    <UI.Navbar.Static>Static</UI.Navbar.Static>
  </UI.Navbar.Menu>
  <UI.Navbar.Menu right>
    <UI.Navbar.Link>Link</UI.Navbar.Link>
    <UI.Navbar.Link>Link</UI.Navbar.Link>
    <UI.Navbar.Link>Link</UI.Navbar.Link>
  </UI.Navbar.Menu>
</UI.Navbar.Container>
```

Add fixed modifier to change the appearance of the navbar container:
* fixed

Add belwo modifier to change the appearance of the navbar menu:
* left
* right

---------------------------------------

### Pager
```js
<Pager
   current={3}
   total={20}
   visiblePages={5}
   onPageChanged={this.handlePageChanged}
   titles={{
     first:   "First",
     prev:  "Prev",
     prevSet: "<<<",
     nextSet: ">>>",
     next:  "Next",
     last:  "Last"
   }} />
```

Pager explain:
* current - current page
* total - current pages (not items)
* visiblePages - visible pages
* onPageChanged - action
* titles
  - first - first page
  - prev - previous page
  - prevSet - previous set of pages
  - nextSet - next set of pages
  - next - next page
  - last - last page

---------------------------------------

### Table

```js
<UI.Table.Container responsive bordered>
  <UI.Table.Row>
    <UI.Table.Heading>Heading 1</UI.Table.Heading>
  </UI.Table.Row>
  <UI.Table.Row>
    <UI.Table.Cell>Cell 1</UI.Table.Cell>
  </UI.Table.Row>
</UI.Table.Container>

// or

<UI.Table.Container>
  <UI.Table.Row>
    <UI.Table.Heading>Heading 1</UI.Table.Heading>
  </UI.Table.Row>
  <UI.Table.Row>
    <UI.Table.Cell bordered>Cell 1</UI.Table.Cell>
  </UI.Table.Row>
</UI.Table.Container>

```

Add below modifier to change the appearance of the table container:
* responsive (by default it's not)
* bordered

Add bordered modifier to change the appearance of the table head and table cell:
* bordered
