import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {About} from './About';

test('renders heading', () => {
  const {getByText} = render(<About />);
  const heading = getByText(/about/i);
  expect(heading).toBeInTheDocument();
});
