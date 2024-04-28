import React from 'react';
import { render } from '@testing-library/react';
import Hospitals from './Hospitals';

// Mocking the BasicTable component
jest.mock('./table', () => () => <div data-testid="basic-table-mock"></div>);

describe('Hospitals component', () => {
  test('renders hospitals component with title and BasicTable', () => {
    // Arrange
    const { getByText, getByTestId } = render(<Hospitals />);
    
    // Act & Assert
    expect(getByText('Empanelled Hospitals')).toBeInTheDocument();
    expect(getByTestId('basic-table-mock')).toBeInTheDocument();
  });
});
