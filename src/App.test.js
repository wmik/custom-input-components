import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Checkbox } from './App';

test('it renders without crashing given no props', async () => {
  let { container } = render(<Checkbox />);

  expect(container.querySelectorAll('span')).toHaveLength(2);
  expect(container.querySelector('input')).not.toBeVisible();
  expect(container.querySelector('input')).toHaveAttribute('type', 'checkbox');
});

test('it renders correctly given valid props', async () => {
  let size = 8;
  let { container } = render(<Checkbox size={size} />);
  let checkbox = container.querySelectorAll('span').item(1);

  expect(checkbox).toHaveStyle({ height: `${size}px`, width: `${size}px` });
});
