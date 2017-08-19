# scriptmaid

> A Visual Studio Code extension to Format and Style scripting Languages!

## Install

Open Visual Studio Code, use the command ```Ctrl+P``` paste the following.

```
ext install scriptmaid
```

## Features

Can format, order and lint for various scripting languages based on a rule system. Currently supported languages are:
- Powershell: [Overveiew](./docs/ps_rules.md) | [Styling](./docs/ps_rules/styling.md) | [Ordering](./docs/ps_rules/ordering.md) | [Linting](./docs/ps_rules/linting.md)

## Extension Settings

This extension contributes the following settings:

* `scriptmaid.excludeLanguageId` : Exclude languageId(s) from all rules
* `scriptmaid.excludeFileExt` : Exclude file extension(s) from all rules
* `scriptmaid.orderDisable`: Disable(s) specific ordering rules
* `scriptmaid.styleDisable`: Disable(s) specific styling rules
* `scriptmaid.lintDisable` : Disable(s) specific linting rules
* `scriptmaid.orderOnSave` : Enables/Disables whether ordering should automatically run on file save [Default: false]
* `scriptmaid.styleOnSave` : Enables/Disables whether styling should automatically run on file save [Default: true]

## Roadmap

- Linting support
- Formatting for all active documents
- Support for the following langauges:
+ Typescript/Javascript
+ Python
+ Go
+ SQL
- Order specific `functions` at the top or bottom of a file/class

## Known Issues

So far there are no known issues.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...
