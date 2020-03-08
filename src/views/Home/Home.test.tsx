import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Home } from './Home';

test('renders heading', () => {
  const { getByText } = render(<Home />);
  const heading = getByText(/home/i);
  expect(heading).toBeInTheDocument();
});
