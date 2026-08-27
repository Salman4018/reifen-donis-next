'use client';

export default function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire this up to a real endpoint (Next.js Route Handler, Server Action,
    // or a service like Formspree) before going live.
    alert('Formular-Demo: Bitte ein Backend / Formular-Service anbinden.');
  }

  return (
    <form className="workshop-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="filiale">Filiale *</label>
        <select id="filiale" name="filiale" required defaultValue="merscheider">
          <option value="merscheider">
            Donis Kfz-Werkstatt &amp; Reifendienst (Merscheider Straße 326, Solingen)
          </option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="name">Ihr Name</label>
        <input type="text" id="name" name="name" autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="email">Ihre E-Mail-Adresse *</label>
        <input type="email" id="email" name="email" required autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="telefon">Ihre Telefonnummer</label>
        <input type="tel" id="telefon" name="telefon" autoComplete="tel" />
      </div>
      <div className="field">
        <label htmlFor="nachricht">Ihre Nachricht *</label>
        <textarea id="nachricht" name="nachricht" rows={5} required></textarea>
      </div>
      <div className="field checkbox-field">
        <input type="checkbox" id="datenschutz" name="datenschutz" required />
        <label htmlFor="datenschutz">
          Ich akzeptiere die <a href="/datenschutz/">Datenschutzerklärung</a>. Bei der Verarbeitung Ihrer Anfrage werden
          Daten bei uns gespeichert.
        </label>
      </div>
      <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
        Absenden
      </button>
      <p className="form-note">
        Alternativ erreichen Sie uns telefonisch unter <a href="tel:0212880239-0">0212 / 880239-0</a> oder per
        E-Mail an <a href="mailto:info@reifen-donis.de">info@reifen-donis.de</a>.
      </p>
    </form>
  );
}
