import React from 'react';
import { MaterialThemeProvider } from './material';

export const LightMaterial = () => (
  <MaterialThemeProvider themeName={"Light"}>hello from Material</MaterialThemeProvider>
);

export const DarkMaterial = () => (
  <MaterialThemeProvider themeName={"Dark"}>hello from Material</MaterialThemeProvider>
);