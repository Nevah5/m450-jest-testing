import React from 'react';
import { render, screen } from '@testing-library/react';
import ListComponent from '../src/app/ListComponent';


test('renders an unordered list with items', () => {
  render(<ListComponent />);

  const list = screen.getByRole('list');
  expect(list).toBeInTheDocument();

  const items = screen.getAllByRole('listitem');
  expect(items).toHaveLength(3);
  expect(items[0]).toHaveTextContent('Item 1');
  expect(items[1]).toHaveTextContent('Item 2');
  expect(items[2]).toHaveTextContent('Item 3');
});