const CHECKOUT_BASE_URL = 'https://megapack-legal-desafectacion-total-inteligencia-crediticia.impultienda.ar/checkout';

/**
 * Appends the current page's query string (utm_source, utm_campaign, gclid,
 * fbclid, etc.) to the checkout URL as-is, so tracking params survive the
 * redirect to Impultienda.
 */
export function getCheckoutUrl(): string {
  if (typeof window === 'undefined') return CHECKOUT_BASE_URL;
  const search = window.location.search;
  return search ? `${CHECKOUT_BASE_URL}${search}` : CHECKOUT_BASE_URL;
}

/**
 * Fires the Meta Pixel InitiateCheckout event when a buy button is clicked,
 * before the browser navigates to the external checkout domain.
 */
export function trackInitiateCheckout(): void {
  if (typeof window === 'undefined') return;
  const fbq = (window as any).fbq;
  if (typeof fbq === 'function') {
    fbq('track', 'InitiateCheckout');
  }
}
