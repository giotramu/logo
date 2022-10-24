[← Back](../README.md)

# \<giotramu-logo>

## Table of contents

- [\<giotramu-logo>](#giotramu-logo)
  - [Table of contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
  - [Attributes](#attributes)

## Install

You can use the Web Component in your HTML template, JSX, Pug etc. [Check the browsers support](./browsers-support.md).

Put the following scripts tag in the head of your document:

```html
<script
  type="module"
  crossorigin
  src="https://cdn.jsdelivr.net/npm/@giotramu/logo/dist/giotramu-logo/giotramu-logo.esm.js"
></script>
```

## Usage

Drop this line into your HTML document:

```html
<giotramu-logo size="150px" column></giotramu-logo>
```

Et... Voilà:

<img width="150px" src="../resources/svg/logo-v-base-900.svg" alt="Giovanni Tramutola" />

Or use the code below for the horizontal version:

```html
<giotramu-logo size="250px"></giotramu-logo>
```

<img width="250px" src="../resources/svg/logo-h-base-900.svg" alt="Giovanni Tramutola" />

## Attributes

<table>
  <thead>
    <tr>
      <th>Attribute</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  <tbody>
    <tr>
      <td>color</td>
      <td><code><a href="./color-scheme.md" title="Color scheme">ColorScheme</a></code></td>
      <td><code>'base-900'</code></td>
      <td>The color of the component. The default is <code>'base-900'</code>, equal to <code>#141414</code>.</td>
    </tr>
    <tr>
      <td>column</td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td>Places monogram and logotype in horizontal or vertical axe.</td>
    </tr>
    <tr>
      <td>size</td>
      <td><code>string</code></td>
      <td><code>'100%'</code></td>
      <td>The width of the component. You can use a length in <code>px</code>, <code>rem</code>, <code>em</code>, <code>%</code> unit.
      </td>
    <tr>
  </tbody>
</table>
