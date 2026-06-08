import React from "react";
import { useHistory } from "react-router-dom";

export default function Onay({ siparisData }) {
  const history = useHistory();

  // Eğer siparisData yoksa anasayfaya yönlendir
  if (!siparisData) {
    return (
      <div className="onay-page">
        <div className="onay-logo">Teknolojik Yemekler</div>
        <p style={{ marginTop: 30, fontSize: "1.1rem" }}>
          Sipariş bilgisi bulunamadı.
        </p>
        <button
          className="submit-btn"
          style={{ maxWidth: 250, marginTop: 20 }}
          onClick={() => history.push("/")}
        >
          Anasayfaya Dön
        </button>
      </div>
    );
  }

  return (
    <div className="onay-page">
      <div className="onay-logo">Teknolojik Yemekler</div>

      <p className="onay-subtitle">lezzetin yolda</p>
      <h1 className="onay-title">SİPARİŞ ALINDI</h1>

      <div className="onay-divider"></div>

      <div className="onay-pizza-name">Position Absolute Acı Pizza</div>

      <div className="onay-details">
        <div className="onay-detail-item">
          <span className="label">Boyut: </span>
          <span className="value">{siparisData.boyut}</span>
        </div>
        <div className="onay-detail-item">
          <span className="label">Hamur: </span>
          <span className="value">{siparisData.hamur}</span>
        </div>
        <div className="onay-detail-item">
          <span className="label">Ek Malzemeler: </span>
          <span className="value">
            {siparisData.malzemeler && siparisData.malzemeler.length > 0
              ? siparisData.malzemeler.join(", ")
              : "Yok"}
          </span>
        </div>
      </div>

      <div className="onay-summary">
        <h4>Sipariş Toplamı</h4>
        <div className="summary-row">
          <span>Seçimler</span>
          <span>{siparisData.extraPrice?.toFixed(2)}₺</span>
        </div>
        <div className="summary-row total">
          <span>Toplam</span>
          <span>{siparisData.total?.toFixed(2)}₺</span>
        </div>
      </div>
    </div>
  );
}
