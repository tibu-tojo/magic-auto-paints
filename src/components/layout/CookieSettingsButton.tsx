"use client";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="footer-link text-left"
      onClick={() => window.dispatchEvent(new Event("magic-auto-paint-open-consent"))}
    >
      Cookie settings
    </button>
  );
}
