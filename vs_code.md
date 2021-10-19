# VS_CODE_EXT
**theme**
Material Theme
Material Theme Icons
Dracula Official
One Dark Pro
vscode-icons
---
**color_code**
Bracket Pair Colorizer
indent-rainbow
---
**format_code**
Prettier - Code formatter
phpfmt
---
**css_support**
CSS Peek
HTML CSS support
Live Server
Live Sass Complier
---
**code_support**
bookmarks
Import Cost
Code Spell Checker
Emmet
---
**other_program**
setting syns
REST Client
thunder_client
Vim
Docker
Composer                             
GitLens
Git History
"temp delete commit: "ctrl+shift+p 'zen' "
Kite AutoComplete AI
---
**auto_type**
Path Intellisense
npm Intellisense
Auto Close Tag
Auto Rename Tag
Auto Import
Close HTML/XML tag
PHP Constructor
PHP Getters & Setters
PHP IntelliSense
PHP Intelephense
PHP namespace resolve
Laravel Artisan
Vetur
Javascript and TypeScript Nightly
DotENV      Shift+ Ctrl + n, run js file (angular)
go          View -> Command Pallete or type Ctrl+Shift+P and type goinstall update/tools.
Flutter
Getx Snippets
Dart
Code Runner
---
**ai_support_type**
Visual Studio IntelliCode
TabNine
---
# SETTING_JSON
<pre><code>
{"editor.fontFamily": "Fira Code",
// change looking merge symbol   
"editor.fontLigatures": true,},{   
"workbench.colorTheme": "One Dark Pro",
"workbench.colorCustomizations": {
// set text color in .txt file
"editor.foreground": "#a9aab1"},
"editor.fontFamily": "Fira Code",
"editor.fontLigatures": true,
"materialTheme.accent": "Remove accents",
"files.autoSave": "afterDelay",
"workbench.iconTheme": "vscode-icons",
"workbench.editor.enablePreview": false,
// Set the default
"editor.formatOnSave": true,
//Experimental support for decorators is a feature that is subject to change in a future release.
// Set the 'experimentalDecorators' option in your 'tsconfig' or 'jsconfig' to remove this warning.ts(1219)
"javascript.implicitProjectConfig.experimentalDecorators": true,
"window.zoomLevel": 0,
"hediet.vscode-drawio.local-storage": "eyIuZHJhd2lvLWNvbmZpZyI6IntcImxhbmd1YWdlXCI6XCJcIixcImN1c3RvbUZvbnRzXCI6W10sXCJsaWJyYXJpZXNcIjpcImdlbmVyYWxcIixcImN1c3RvbUxpYnJhcmllc1wiOltcIkwuc2NyYXRjaHBhZFwiXSxcInBsdWdpbnNcIjpbXSxcInJlY2VudENvbG9yc1wiOltdLFwiZm9ybWF0V2lkdGhcIjpcIjI0MFwiLFwiY3JlYXRlVGFyZ2V0XCI6ZmFsc2UsXCJwYWdlRm9ybWF0XCI6e1wieFwiOjAsXCJ5XCI6MCxcIndpZHRoXCI6ODUwLFwiaGVpZ2h0XCI6MTEwMH0sXCJzZWFyY2hcIjp0cnVlLFwic2hvd1N0YXJ0U2NyZWVuXCI6dHJ1ZSxcImdyaWRDb2xvclwiOlwiI2QwZDBkMFwiLFwiZGFya0dyaWRDb2xvclwiOlwiIzZlNmU2ZVwiLFwiYXV0b3NhdmVcIjp0cnVlLFwicmVzaXplSW1hZ2VzXCI6bnVsbCxcIm9wZW5Db3VudGVyXCI6MCxcInZlcnNpb25cIjoxOCxcInVuaXRcIjoxLFwiaXNSdWxlck9uXCI6ZmFsc2UsXCJ1aVwiOlwiXCJ9In0=",
"go.formatTool": "goimports",
"editor.codeActionsOnSave": null,
"go.testOnSave": true,
"go.lintOnSave": "package",
"go.testFlags": [ "-v" ],
"go.autocompleteUnimportedPackages": true,
"[go]": {
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
"source.organizeImports": true} },
"diffEditor.ignoreTrimWhitespace": false,
"workbench.startupEditor": "welcomePage" }
</code></pre>
# CREATE_BINDING
- *locate at:~/.config/Code/User/keybindings.json* 
- **Place your key bindings in this file to override the defaultsauto[]**
<pre><code>[{
"key": "ctrl+d",
"command": "editor.action.copyLinesDownAction",
"when": "editorTextFocus && !editorReadonly"},{
"key": "ctrl+shift+alt+down",
"command": "-editor.action.copyLinesDownAction",
"when": "editorTextFocus && !editorReadonly" },]
</code></pre>
# VSCODE_SNIPPETS
- *locate at: ~/.config/Code/User/snippets/global.code-snippets*
- Ctrl + shift + p -> Configure user snippets
- Step:
Create shortcut key to generate code in VSCode
Add it to the global file
1. File-->Preferences-->User snippets
2. Select New Global Snippets file
3. Save it as global.code-snippets (or name it anything with the extention code-snippets)
4. Remove everything then paste this in:
<pre><code>
{"Var_Dump": {
"prefix": "vd",
"scope": "php",
"body": [ "var_dump($1);","$2" ],
"description": "var_dump"}}
</code></pre>
Or Add it to the php file
1. File-->Preferences-->User snippets-->php.json
2. Remove everything then paste this in:
<pre><code>
{"Var_Dump": {
"prefix": "vd",
"body": [ "var_dump($1);","$2" ],
"description": "var_dump"}}
</code></pre>
# NVIM
*File Structure:[.config/nvim]*
autoload
plugin
init.vim
setting init.vim || 
install vim || sudo apt install vim
install nvim || sudo apt install nvim
Install plugin
curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs 
run nvim || nvim
quit nvim || :q