// LoginPage.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import {LoginPage} from "../pages/Login"; // Assuming LoginPage.js is in the same directory

test('renders login page', () => {
  render(<LoginPage />);
  const loginTitle = screen.getByText(/login/i);
  expect(loginTitle).toBeInTheDocument();
});
