# Insert Numeric Range - VSCode Extension

This is yet another extension for inserting a number at each selection caret.

Why should you use this one?

- Numbers increment by location in the document, not the order the carets were added.
  This means if you multi-select from the bottom up, the numbers aren't reversed.
- Both initial value and step can be specified (defaulting to 0 and 1, respectively).
- You can easily configure separate shortcuts for 0-indexed or 1-indexed numbers.

## Basic Usage

1. Create one or more selection carets and run "Insert Numeric Range" in the command panel.
   ![Screenshot 1](images/screenshot_1.png)

2. Optionally, you can enter start and step parameters.
   ![Screenshot 2](images/screenshot_2.png)

3. Press enter to insert the number sequence.
   ![Screenshot 3](images/screenshot_3.png)

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
