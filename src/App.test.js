import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders the inital page', () => {
    render(< App />);
    expect(screen.getByText('Current 1 of Total 3 Steps.')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });
});

export default App;
