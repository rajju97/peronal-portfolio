import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Mock window.scrollTo
window.scrollTo = jest.fn();

describe('App Component', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders navigation bar', () => {
    expect(screen.getByText('Rajveer Singh')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /toggle dark mode/i })).toBeInTheDocument();
  });

  test('toggles dark mode', () => {
    const toggleButton = screen.getByRole('button', { name: /toggle dark mode/i });
    fireEvent.click(toggleButton);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    fireEvent.click(toggleButton);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  test('handles mobile menu toggle', () => {
    const menuButton = screen.getByRole('button', { name: /menu/i });
    fireEvent.click(menuButton);
    expect(screen.getByText('home')).toBeInTheDocument();
    fireEvent.click(menuButton);
    expect(screen.queryByText('home')).not.toBeInTheDocument();
  });

  test('renders all sections', () => {
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Work Experience')).toBeInTheDocument();
    expect(screen.getByText('Personal Projects')).toBeInTheDocument();
  });
});