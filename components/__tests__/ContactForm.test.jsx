import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from '../ContactForm';

describe('ContactForm', () => {
  it('renders all required fields', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/filiale/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/ihr name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/ihre e-mail-adresse/i)).toBeRequired();
    expect(screen.getByLabelText(/ihre telefonnummer/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/ihre nachricht/i)).toBeRequired();
    expect(screen.getByLabelText(/ich akzeptiere/i)).toBeRequired();
  });

  it('renders the submit button and fallback contact details', () => {
    render(<ContactForm />);

    expect(screen.getByRole('button', { name: /absenden/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '0212 / 880239-0' })).toHaveAttribute('href', 'tel:0212880239-0');
    expect(screen.getByRole('link', { name: 'info@reifen-donis.de' })).toHaveAttribute(
      'href',
      'mailto:info@reifen-donis.de'
    );
    expect(screen.getByRole('link', { name: 'Datenschutzerklärung' })).toHaveAttribute('href', '/datenschutz/');
  });

  it('shows a placeholder alert on submit since no backend is wired up', async () => {
    const user = userEvent.setup();
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/ihre e-mail-adresse/i), 'test@example.com');
    await user.type(screen.getByLabelText(/ihre nachricht/i), 'Hallo, ich brauche einen Termin.');
    await user.click(screen.getByLabelText(/ich akzeptiere/i));
    await user.click(screen.getByRole('button', { name: /absenden/i }));

    expect(alertSpy).toHaveBeenCalledTimes(1);
    alertSpy.mockRestore();
  });
});
