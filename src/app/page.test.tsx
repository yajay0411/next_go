import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from './page';

describe('Home Page', () => {
  it('renders the home page with navigation buttons', () => {
    render(<Home />);

    // Check if all three navigation buttons are present
    expect(screen.getByRole('button', { name: /professionals/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /obesity/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /metabolic test/i })).toBeInTheDocument();
  });

  it('renders navigation links with correct href attributes', () => {
    render(<Home />);

    // Check if links have correct hrefs
    const professionalsLink = screen.getByRole('link', { name: /professionals/i });
    const obesityLink = screen.getByRole('link', { name: /obesity/i });
    const metabolicTestLink = screen.getByRole('link', { name: /metabolic test/i });

    expect(professionalsLink).toHaveAttribute('href', '/professionals');
    expect(obesityLink).toHaveAttribute('href', '/obesity');
    expect(metabolicTestLink).toHaveAttribute('href', '/metabolic-test');
  });
});
