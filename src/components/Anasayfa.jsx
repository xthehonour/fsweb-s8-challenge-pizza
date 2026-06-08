import React from "react";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";

const categories = [
  { icon: "/images/iteration-2-images/icons/1.svg", name: "YENİ! Kore" },
  { icon: "/images/iteration-2-images/icons/2.svg", name: "Pizza" },
  { icon: "/images/iteration-2-images/icons/3.svg", name: "Burger" },
  { icon: "/images/iteration-2-images/icons/4.svg", name: "Kızartmalar" },
  { icon: "/images/iteration-2-images/icons/5.svg", name: "Fast food" },
  { icon: "/images/iteration-2-images/icons/6.svg", name: "Gazlı İçecek" },
];

const products = [
  {
    img: "/images/iteration-2-images/pictures/food-1.png",
    name: "Terminal Pizza",
    rating: 4.9,
    reviews: 200,
    price: "60₺",
  },
  {
    img: "/images/iteration-2-images/pictures/food-2.png",
    name: "Position Absolute Acı Pizza",
    rating: 4.9,
    reviews: 928,
    price: "85₺",
  },
  {
    img: "/images/iteration-2-images/pictures/food-3.png",
    name: "useEffect Tavuklu Burger",
    rating: 4.9,
    reviews: 462,
    price: "75₺",
  },
];

const filterLabels = [
  { icon: "/images/iteration-2-images/icons/1.svg", name: "Ramen" },
  { icon: "/images/iteration-2-images/icons/2.svg", name: "Pizza", active: true },
  { icon: "/images/iteration-2-images/icons/3.svg", name: "Burger" },
  { icon: "/images/iteration-2-images/icons/4.svg", name: "French fries" },
  { icon: "/images/iteration-2-images/icons/5.svg", name: "Fast food" },
  { icon: "/images/iteration-2-images/icons/6.svg", name: "Soft drinks" },
];

export default function Anasayfa() {
  const history = useHistory();

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="hero-section">
        <div className="hero-logo">Teknolojik Yemekler</div>
        <p className="hero-subtitle">fırsatı kaçırma</p>
        <h1 className="hero-title">
          KOD ACIKTIRIR<br />PİZZA, DOYURUR
        </h1>
        <button
          className="hero-cta"
          onClick={() => history.push("/siparisformu")}
        >
          ACIKTIM
        </button>
        <div className="hero-banner-wrapper">
          <img
            src="/images/iteration-1-images/home-banner.png"
            alt="Pizza"
          />
        </div>
      </section>

      {/* ===== KATEGORİ BAR ===== */}
      <div className="category-bar">
        {categories.map((cat) => (
          <div key={cat.name} className="cat-item">
            <img src={cat.icon} alt={cat.name} />
            <span>{cat.name}</span>
          </div>
        ))}
      </div>

      {/* ===== CTA KARTLARI ===== */}
      <section className="cta-section">
        <div
          className="cta-card large"
          style={{
            backgroundImage: `url(/images/iteration-2-images/cta/kart-1.png)`,
          }}
        >
          <h3>Özel<br />Lezzetus</h3>
          <p>Position: Absolute Acı Burger</p>
          <button className="cta-btn" onClick={() => history.push("/siparisformu")}>
            SİPARİŞ VER
          </button>
        </div>

        <div
          className="cta-card"
          style={{
            backgroundImage: `url(/images/iteration-2-images/cta/kart-2.png)`,
          }}
        >
          <h3>Hackathon<br />Burger Menü</h3>
          <button className="cta-btn" onClick={() => history.push("/siparisformu")}>
            SİPARİŞ VER
          </button>
        </div>

        <div
          className="cta-card"
          style={{
            backgroundImage: `url(/images/iteration-2-images/cta/kart-3.png)`,
          }}
        >
          <h3>Çoooook hızlı<br />npm gibi kurye</h3>
          <button className="cta-btn" onClick={() => history.push("/siparisformu")}>
            SİPARİŞ VER
          </button>
        </div>
      </section>

      {/* ===== ÜRÜN BÖLÜMü ===== */}
      <section className="products-section">
        <p className="section-subtitle">en çok paketlenen menüler</p>
        <h2 className="section-title">Acıktıran Kodlara Doyuran Lezzetler</h2>

        <div className="product-filters">
          {filterLabels.map((f) => (
            <button
              key={f.name}
              className={f.active ? "active" : ""}
            >
              <img src={f.icon} alt={f.name} />
              {f.name}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {products.map((p) => (
            <div key={p.name} className="product-card">
              <img className="product-img" src={p.img} alt={p.name} />
              <div className="product-info">
                <div className="product-name">{p.name}</div>
                <div className="product-meta">
                  <span>{p.rating}</span>
                  <span>({p.reviews})</span>
                  <span className="product-price">{p.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}
