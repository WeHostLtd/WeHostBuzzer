import React from 'react';
import { Container } from 'react-bootstrap';

export function FooterSimple() {
  return (
    <div id="footer-simple">
      Enjoying this event?{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://wehostglobal.com"
      >
        Check out the other experiences we offer!
      </a>
    </div>
  );
}

/**
 * Footer component
 * @param {bool} mobileOnly - only display on mobile devices, <768 px
 */
export default function Footer({ mobileOnly = false }) {
  return (
    <footer className={mobileOnly ? 'd-block d-md-none' : null}>
      <Container>
        <div>
          Enjoying this event?{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wehostglobal.com"
          >
            Check out the other experiences we offer!
          </a>
        </div>
      </Container>
    </footer>
  );
}
