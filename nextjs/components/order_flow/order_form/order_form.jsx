import React from 'react';
import {Button} from '@frnt/base-ui.ui.button'
import { MaterialThemeProvider } from '@frnt/base-ui.themes.material'

export function OrderForm({ text }) {
  return (
    <div>
      {text}

      <MaterialThemeProvider>
        <Button>this is a bit linked button</Button>
      </MaterialThemeProvider>
    </div>
  );
}
