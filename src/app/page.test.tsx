import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renders the welcome message', () => {
    render(<Home />);
    const heading = screen.getByText(/welcome to next learn/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the project scaffold message', () => {
    render(<Home />);
    const paragraph = screen.getByText(/development/i);
    expect(paragraph).toBeInTheDocument();
  });
});
