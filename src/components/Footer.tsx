"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <button
        className="footer__to-top"
        onClick={() => window.scrollTo({ left: 0, top: 0, behavior: "smooth" })}
      >
        Back To Top
      </button>
      <p className="footer__quote">
        A stone amid the waves
        <span className="footer__quote-author">
          <span className="footer__quote-prefix">—</span>
          Lorn Au Arcos
        </span>
      </p>
    </footer>
  );
}
