import React from 'react';
import { render } from '@testing-library/react';
import { BasicOrderForm } from './order_form.composition';


it('should render with the correct text', () => {
  const { getByText } = render(<BasicOrderForm />);
  const rendered = getByText('hello from OrderForm');
  expect(rendered).toBeTruthy();
});

