# C Token Analyzer

A VSCode extension that provides live C token analysis with definitions from your comprehensive C dictionary.

## Features

- **Live Hover Information**: Hover over any C token to see its definition and usage
- **Visual Token Analysis Panel**: View all tokens organized by type with positions and descriptions
- **Status Bar Integration**: See current token information in the status bar
- **Comprehensive Dictionary**: Uses your complete C reference dictionary for accurate definitions
- **Real-time Analysis**: Updates as you type

## How to Use

1. **Install the Extension**: Copy the extension folder to your VSCode extensions directory
2. **Open a C File**: The extension activates automatically when you open `.c` files
3. **Hover for Definitions**: Hover over any token (keywords, operators, identifiers) to see definitions
4. **View Token Panel**: Check the "C Token Analysis" panel in the Explorer view
5. **Click Tokens**: Click any token in the panel to open its detailed definition
6. **Browse Dictionary**: Use "Show C Dictionary" command to browse all C language tokens
7. **Command Palette**: Use `Ctrl+Shift+P` and search for "C Token Analyzer" commands

## Commands

- `C Token Analyzer: Show Token Information` - Shows info for token at cursor
- `C Token Analyzer: Analyze Current File` - Analyzes all tokens in current file
- `C Token Analyzer: Show C Dictionary` - Opens the complete C Language Dictionary
- `C Token Analyzer: Show Token Definition` - Shows detailed definition for a specific token

## Requirements

- VSCode 1.74.0 or higher
- **No external files needed** - All 650+ C token definitions are embedded!

## Installation

1. Copy the `c-token-analyzer` folder to your VSCode extensions directory:
   - Windows: `%USERPROFILE%\.vscode\extensions\`
   - macOS: `~/.vscode/extensions/`
   - Linux: `~/.vscode/extensions/`

2. Restart VSCode or reload the window (`Ctrl+Shift+P` → "Developer: Reload Window")

3. Open a C file to activate the extension

## Development

To modify or extend the extension:

1. Open the extension folder in VSCode
2. Edit `extension.js` directly (no compilation needed)
3. Reinstall using `./install_extension.sh`
4. Reload VSCode window to see changes

## Features in Detail

### Hover Provider
- Shows token definitions when you hover over C keywords, operators, and identifiers
- Includes examples and detailed descriptions from your C dictionary

### Token Analysis Panel
- **Visual tree view** showing all tokens organized by type
- **Token groups**: keywords, operators, identifiers, literals, strings
- **Click tokens** to jump to their location in the code
- **Hover tooltips** show token descriptions
- **Live updates** as you type
- **Position information** (line:column) for each token

### Status Bar
- Displays current token information as you move your cursor
- Shows token name and type in real-time

### Embedded Dictionary
- **650+ token definitions** embedded directly in the extension
- All definitions extracted from the comprehensive `C_Dictionary.md`
- **Completely portable** - works anywhere without external files
- Covers keywords, operators, and standard library functions

## Configuration

The extension can be configured in VSCode settings:

- `c-token-analyzer.enableHover`: Enable/disable hover information (default: true)
- `c-token-analyzer.showPanel`: Show/hide the token analysis panel (default: true)
