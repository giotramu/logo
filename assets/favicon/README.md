# Favicon

Copy/paste the link tags below in the head of your `index.html` document:

```html
<head>
  <!-- ... -->

  <meta name="theme-color" content="#141414" />

  <link
    rel="icon"
    href="https://cdn.jsdelivr.net/npm/@giotramu/logo/assets/favicon/favicon.svg"
  />

  <link
    rel="mask-icon"
    href="https://cdn.jsdelivr.net/npm/@giotramu/logo/assets/favicon/safari-pinned-tab.svg"
    color="#05F"
  />

  <link
    rel="apple-touch-icon"
    href="https://cdn.jsdelivr.net/npm/@giotramu/logo/assets/favicon/apple-touch-icon.png"
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
  "background_color": "#FFFFFF",
  "theme_color": "#141414",
  "icons": [
    {
      "src": "https://cdn.jsdelivr.net/npm/@giotramu/logo/resources/favicon/google-touch-icon.png",
      "sizes": "512x512"
    }
  ]
}
```

Sadly, not everyone is on modern browsers yet, BUT it can be quickly resolved by dropping the `favicon.ico` at the root of your website.
