[← Back](../README.md)

# \<giotramu-sign>

## Table of contents

- [Install](#install)
- [Usage](#usage)
- [Attributes](#attributes)

## Install

You can use the Web Component in your HTML template, JSX, Pug etc. [Check the browsers support](./browsers-support.md).
Put the following scripts tag in the head of your document:

```html
<!-- for modern browsers, where JavaScript Modules run natively  -->
<script
  type="module"
  crossorigin="anonymous"
  src="https://cdn.jsdelivr.net/npm/@giotramu/logo/dist/giotramu-logo/giotramu-logo.esm.js"
></script>

<!-- for legacy browsers -->
<script
  nomodule
  crossorigin="anonymous"
  src="https://cdn.jsdelivr.net/npm/@giotramu/logo/dist/giotramu-logo/giotramu-logo.js"
></script>
```

## Usage

Drop this line into your HTML document:

```html
<giotramu-sign size="100px"></giotramu-sign>
```

Et... Voilà:

<img width="100px" src="../resources/svg/sign.svg" alt="Giovanni Tramutola" />

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
      <td><code>'accent-high' | 'accent-low' | 'base-high' | 'base-low' | 'light-high' | 'light-low' | 'white' | 'black'</code></td>
      <td><code>'accent-high'</code></td>
      <td>The color of the component. The default is <code>'accent-high'</code>, equal to <code>#0c57fb</code>. <a href="./color-scheme.md" title="Color scheme">Check the color scheme</a>.</td>
    </tr>
    <tr>
      <td>size</td>
      <td><code>string</code></td>
      <td><code>'100%'</code></td>
      <td>The width of the component. Use a length in <code>px</code>, <code>rem</code>, <code>em</code>, <code>%</code> unit.</td>
    <tr>
  </tbody>
</table>
