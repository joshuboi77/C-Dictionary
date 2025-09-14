#!/bin/bash

# C Token Analyzer Extension Installer
echo "Installing C Token Analyzer VSCode Extension..."

# Determine the VSCode extensions directory
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    EXTENSIONS_DIR="$HOME/.vscode/extensions"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    EXTENSIONS_DIR="$HOME/.vscode/extensions"
elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]]; then
    # Windows (Git Bash)
    EXTENSIONS_DIR="$USERPROFILE/.vscode/extensions"
else
    echo "Unsupported operating system: $OSTYPE"
    exit 1
fi

# Create extensions directory if it doesn't exist
mkdir -p "$EXTENSIONS_DIR"

# Copy the extension
EXTENSION_NAME="c-token-analyzer"
TARGET_DIR="$EXTENSIONS_DIR/$EXTENSION_NAME"

echo "Copying extension to: $TARGET_DIR"

# Remove existing installation if it exists
if [ -d "$TARGET_DIR" ]; then
    echo "Removing existing installation..."
    rm -rf "$TARGET_DIR"
fi

# Copy the extension
cp -r "c-token-analyzer" "$TARGET_DIR"

if [ $? -eq 0 ]; then
    echo "✅ Extension installed successfully!"
    echo ""
    echo "To complete the installation:"
    echo "1. Restart VSCode or reload the window (Ctrl+Shift+P → 'Developer: Reload Window')"
    echo "2. Open a C file to activate the extension"
    echo "3. Hover over C tokens to see definitions!"
    echo ""
    echo "The extension will automatically:"
    echo "- Show hover information for C tokens"
    echo "- Display token analysis in the Explorer panel"
    echo "- Update the status bar with current token info"
    echo "- Load definitions from your C_Dictionary.md file"
else
    echo "❌ Installation failed!"
    exit 1
fi
