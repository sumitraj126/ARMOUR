import { render, screen } from '@testing-library/react';
import Navbar from '@/components/Navbar';

describe('Navbar', () => {
  it('renders navigation links', () => {
    render(<Navbar />);
    
    // Check if main navigation links are present
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/services/i)).toBeInTheDocument();
    expect(screen.getByText(/projects/i)).toBeInTheDocument();
    expect(screen.getByText(/blog/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });

  it('has correct navigation links', () => {
    render(<Navbar />);
    
    // Check if links have correct href attributes
    expect(screen.getByText(/home/i).closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText(/about/i).closest('a')).toHaveAttribute('href', '/about');
    expect(screen.getByText(/services/i).closest('a')).toHaveAttribute('href', '/services');
    expect(screen.getByText(/projects/i).closest('a')).toHaveAttribute('href', '/projects');
    expect(screen.getByText(/blog/i).closest('a')).toHaveAttribute('href', '/blog');
    expect(screen.getByText(/contact/i).closest('a')).toHaveAttribute('href', '/contact');
  });
});
