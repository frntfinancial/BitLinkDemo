import React from 'react';
// import 'material-components-web/dist/material-components-web.min.css'
// import 'material-icons/iconfont/material-icons.css';
import {ThemeProvider} from '@rmwc/theme'
import {getTheme} from "./theme"

export function MaterialThemeProvider({ children, themeName }) {
  return (
    <ThemeProvider options={getTheme(themeName)} className="mdc-typography">
      {children}
    </ThemeProvider>
  );
}
