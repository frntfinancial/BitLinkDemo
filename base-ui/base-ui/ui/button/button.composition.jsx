import React from 'react';
import { Button } from './button';
import { MaterialThemeProvider } from "@frnt/base-ui.themes.material";

export const BasicButton = () => (
  <Button>hello from button</Button>
);

export const RaisedButton = () => (
  <Button raised>Hello from raised Button</Button>
)

export const ThemedButton = () => (
  <MaterialThemeProvider themeName={"Dark"}><Button raised>hello from themed Button2</Button></MaterialThemeProvider>
)