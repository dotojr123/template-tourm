import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sign in button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sign In \/ Register/i);
  expect(linkElement).toBeInTheDocument();
});
