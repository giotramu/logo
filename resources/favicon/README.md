# Favicon

Copy/paste the link tag in the head of your `index.html` document:

```html
<!-- Favicon -->
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="https://cdn.jsdelivr.net/npm/@giotramu/logo/resources/favicon/apple-touch-icon.png"
/>

<link
  rel="icon"
  type="image/png"
  sizes="32x32"
  href="https://cdn.jsdelivr.net/npm/@giotramu/logo/resources/favicon/favicon-32.png"
/>

<link
  rel="icon"
  type="image/png"
  sizes="16x16"
  href="https://cdn.jsdelivr.net/npm/@giotramu/logo/resources/favicon/favicon-16.png"
/>
```

Do you have a [`manifest.json`][manifest-doc-url] in your project? Perfect! Copy and paste the following properties:

```json
{
  "display": "standalone",
  "icons": [
    {
      "src": "https://cdn.jsdelivr.net/npm/@giotramu/logo/resources/favicon/android-chrome-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "https://cdn.jsdelivr.net/npm/@giotramu/logo/resources/favicon/android-chrome-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "background_color": "#ffffff",
  "theme_color": "#0c57fb"
}
```

<!---
  L I N K S
-->

[manifest-doc-url]: https://developer.chrome.com/extensions/manifest
