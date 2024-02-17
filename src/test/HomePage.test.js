// HomePage.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../pages/HomePage';

describe('HomePage', () => {
  test('renders all sections', () => {
    render(<HomePage />);
    
    // Assert that all sections are rendered
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.getByTestId('categories')).toBeInTheDocument();
    expect(screen.getByTestId('best-deals')).toBeInTheDocument();
    expect(screen.getByTestId('events')).toBeInTheDocument();
    expect(screen.getByTestId('featured-product')).toBeInTheDocument();
    expect(screen.getByTestId('sponsored')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
