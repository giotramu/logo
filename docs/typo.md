[← Back](../README.md)

# \<giotramu-typo>

## Install

- **Script tag**

Put a script tag in the head of your `index.html` document:

```html
<script src="https://unpkg.com/@giotramu/logo/dist/giotramu-logo.js"></script>
```

- **Node Modules**

Run `npm install @giotramu/logo --save`.

Put a script tag in the head of your `index.html`:

```html
<script src="node_modules/@giotramu/logo/dist/giotramu-logo.js"></script>
```

## Usage

You can use the element anywhere in your HTML template, JSX, Pug etc.

[Check the browsers support](./browsers-support.md).

```html
<giotramu-typo size="320px" fill-color="digital"></giotramu-typo>
```

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
      <td>fill-color</td>
      <td><code>'dark' | 'digital' | 'light' | 'silver'</code></td>
      <td><code>'none'</code></td>
      <td>The color of the component. The default is <code>'none'</code>, equal to <code>#000</code>. <a href="./color-schema.md" title="Color schema">Check the color schema</a>.</td>
    </tr>
    <tr>
      <td>size</td>
      <td><code>string</code></td>
      <td><code>'100%'</code></td>
      <td>The width of the component. Use a length in <code>px</code>, <code>rem</code>, <code>em</code>, <code>%</code> unit</td>
    <tr>
  </tbody>
</table>