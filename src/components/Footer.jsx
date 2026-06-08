import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">Teknolojik<br />Yemekler</div>
          <div className="contact-item">
            <img src="/images/iteration-2-images/footer/icons/icon-1.png" alt="adres" />
            <span>341 Londonderry Road,<br />İstanbul Türkiye</span>
          </div>
          <div className="contact-item">
            <img src="/images/iteration-2-images/footer/icons/icon-2.png" alt="email" />
            <span>aciktim@teknolojikyemekler.com</span>
          </div>
          <div className="contact-item">
            <img src="/images/iteration-2-images/footer/icons/icon-3.png" alt="telefon" />
            <span>+90 216 123 45 67</span>
          </div>
        </div>

        <div className="footer-menu">
          <h4>Sıcacık Menüler</h4>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>

        <div className="footer-insta">
          <h4>Instagram</h4>
          <div className="insta-grid">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src={`/images/iteration-2-images/footer/insta/li-${i}.png`}
                alt={`instagram ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2023 Teknolojik Yemekler.</span>
        <span className="twitter-icon">𝕏</span>
      </div>
    </footer>
  );
}
