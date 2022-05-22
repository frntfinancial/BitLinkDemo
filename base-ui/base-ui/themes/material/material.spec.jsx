import React from 'react';
import { render } from '@testing-library/react';
import { LightMaterial } from './material.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<LightMaterial />);
  const rendered = getByText('hello from Material');
  expect(rendered).toBeTruthy();
});

