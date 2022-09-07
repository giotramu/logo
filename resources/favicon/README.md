# Favicon

Copy/paste the link tag in the head of your `index.html` document:

```html
<link
  rel="apple-touch-icon"
  type="image/png"
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

Do you have a [`manifest.json`](https://developer.chrome.com/extensions/manifest) in your project? Perfect! Copy and paste the following properties:

```json
{
  "name": "",
  "short_name": "",
  "display": "standalone",
  "background_color": "#fff",
  "theme_color": "#141414",
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
  ]
}
```
