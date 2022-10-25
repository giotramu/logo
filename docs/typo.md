[← Back](../README.md)

# \<giotramu-typo>

## Install

You can use the Web Component in your HTML template, JSX, Pug etc. [Check the browsers support](./browsers-support.md).

Put the following scripts tag in the head of your document:

```html
<script
  type="module"
  crossorigin="anonymous"
  src="https://cdn.jsdelivr.net/npm/@giotramu/logo/dist/giotramu-logo/giotramu-logo.esm.js"
></script>
```

## Usage

Drop this line into your HTML document:

```html
<giotramu-typo size="250px"></giotramu-typo>
```

---

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
      <td><a href="./color-scheme.md" title="Color scheme">ColorScheme</a></td>
      <td><code>'base-900'</code></td>
      <td>The color of the component. The default is the <code>'base-900'</code> color, equal to the hexadecimal code <code>#141414</code>.</td>
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
