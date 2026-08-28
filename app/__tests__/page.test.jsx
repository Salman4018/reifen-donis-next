import { render, screen } from '@testing-library/react';
import HomePage from '../page';

jest.mock('next/link', () => function MockLink({ children, ...props }) {
  return <a {...props}>{children}</a>;
});

describe('HomePage', () => {
  it('keeps the circular logo lettering between the two rings', () => {
    render(<HomePage />);

    const badge = document.querySelector('.badge-wheel');
    const circles = badge.querySelectorAll('circle');
    const textPath = badge.querySelector('textPath');

    expect(screen.getByText(/REIFEN DONIS/)).toBeInTheDocument();
    expect(circles).toHaveLength(2);
    expect(circles[0]).toHaveAttribute('r', '96');
    expect(circles[1]).toHaveAttribute('r', '78');
    expect(textPath).toHaveAttribute('href', '#ring');
    const ringPath = badge.querySelector('path#ring');
    expect(ringPath).toBeInTheDocument();
    expect(ringPath).toHaveAttribute('d', expect.stringContaining('-85'));
  });
});
