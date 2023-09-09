# Insert Numeric Range VSCode Extension

This is yet another extension for inserting a number at each selection caret.

Why should you use this one?

- Numbers increment by location in the document, not the order the carets were added.
  This means if you multi-select from the bottom up, the numbers aren't reversed.
- Both initial value and step can be specified (defaulting to 0 and 1, respectively).
- You can easily configure separate shortcuts for 0-indexed or 1-indexed numbers.

## Future Features

- Configurable number format string

## Recommended keyboard shortcuts

```json
    {
        "key": "ctrl+alt+n",
        "command": "insert-numeric-range.insertNumericRange",
        "when": "editorFocus",
        "args": 0
    },
    {
        "key": "ctrl+alt+shift+n",
        "command": "insert-numeric-range.insertNumericRange",
        "when": "editorFocus",
        "args": 1
    }
```
