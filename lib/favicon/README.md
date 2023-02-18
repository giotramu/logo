# Favicon

Copy/paste the link tags below in the head of your `index.html` document:

```html
<head>
  <!-- ... -->

  <meta name="theme-color" content="#313133" />

  <link
    crossorigin
    rel="icon"
    href="https://cdn.jsdelivr.net/npm/@giotramu/logo/lib/favicon/favicon.svg"
  />

  <link
    crossorigin
    rel="mask-icon"
    href="https://cdn.jsdelivr.net/npm/@giotramu/logo/lib/favicon/mask-icon.svg"
    color="#4169E1"
  />

  <link
    crossorigin
    rel="apple-touch-icon"
    href="https://cdn.jsdelivr.net/npm/@giotramu/logo/lib/favicon/touch-icon-180.png"
  />

  <!--
    Create and link your own manifest.
    See the example below for more details.

    <link rel="manifest" href="manifest.json">
  -->
</head>
```

Do you have a [`manifest.json`](https://developer.chrome.com/extensions/manifest) in your project? Perfect! Copy and paste the following properties:

```json
{
  "name": "Sample App",
  "short_name": "Sample App",
  "display": "fullscreen",
  "background_color": "#F8F8FF",
  "theme_color": "#313133",
  "icons": [
    {
      "src": "https://cdn.jsdelivr.net/npm/@giotramu/logo/lib/favicon/touch-icon-512.png",
      "sizes": "512x512"
    }
  ]
}
```
