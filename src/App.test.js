import { render, screen } from '@testing-library/react';
import App from './App';

test('I was changed for good ', () => {
  render(<App />);
  const linkElement = screen.getByText(/I was changed for good/i);
  expect(linkElement).toBeInTheDocument();
});

test('I was changed for good ', () => {
  render(<App />);
  const linkElement = screen.getByText(/I was changed for good/i);
  expect(linkElement).toBeInTheDocument();
});
