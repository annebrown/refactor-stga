---
titled: 'IDE'
description: 'VS Code Config'
lastModified:: '2015-02-25'
---

## Autocompletion

`.vscode/settings.json`:

```json
{
  "files.associations": {
      "*.css": "tailwindcss"
  },
  "editor.quickSuggestions": {
      "strings": true
  },
}
```

## UI IntelliSense

`.vscode/settings.json`:

```json
{
 "tailwindCSS.classAttributes": [
    "class",
    "ui"
  ],
}
```
