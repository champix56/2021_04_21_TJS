import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TchatView from './TchatView';

describe('<TchatView />', () => {
  test('it should mount', () => {
    render(<TchatView />);
    
    const tchatView = screen.getByTestId('TchatView');

    expect(tchatView).toBeInTheDocument();
  });
});