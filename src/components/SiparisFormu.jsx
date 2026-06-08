import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const extraList = [
  "Pepperoni", "Domates", "Biber",
  "Sosis", "Mısır", "Sucuk",
  "Kanada Jambonu", "Sucuk", "Ananas",
  "Tavuk Izgara", "Jalepeno", "Kabak",
  "Soğan", "Sarımsak",
];

// Remove duplicate "Sucuk"
const uniqueExtras = [...new Set(extraList)];

export default function SiparisFormu({ setSiparisData }) {
  const history = useHistory();

  const [form, setForm] = useState({
    isim: "",
    boyut: "",
    hamur: "",
    malzemeler: [],
    not: "",
    adet: 1,
  });

  const [errors, setErrors] = useState({
    isim: "",
  });

  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  // Validate form
  useEffect(() => {
    const isimOk = form.isim.trim().length >= 3;
    const boyutOk = form.boyut !== "";
    const hamurOk = form.hamur !== "";
    const malzemeOk = form.malzemeler.length >= 4 && form.malzemeler.length <= 10;
    setIsValid(isimOk && boyutOk && hamurOk && malzemeOk);
  }, [form]);

  const handleIsimChange = (e) => {
    const val = e.target.value;
    setForm({ ...form, isim: val });
    if (val.trim().length < 3 && val.length > 0) {
      setErrors({ ...errors, isim: "İsim en az 3 karakter olmalıdır." });
    } else {
      setErrors({ ...errors, isim: "" });
    }
  };

  const handleSizeChange = (size) => {
    setForm({ ...form, boyut: size });
  };

  const handleHamurChange = (e) => {
    setForm({ ...form, hamur: e.target.value });
  };

  const toggleExtra = (item) => {
    const current = form.malzemeler;
    if (current.includes(item)) {
      setForm({ ...form, malzemeler: current.filter((x) => x !== item) });
    } else {
      if (current.length < 10) {
        setForm({ ...form, malzemeler: [...current, item] });
      }
    }
  };

  const handleNoteChange = (e) => {
    setForm({ ...form, not: e.target.value });
  };

  const changeAdet = (delta) => {
    const newAdet = form.adet + delta;
    if (newAdet >= 1) {
      setForm({ ...form, adet: newAdet });
    }
  };

  const extraPrice = form.malzemeler.length * 5;
  const basePrice = 85.5;
  const total = (basePrice + extraPrice) * form.adet;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    setLoading(true);
    setApiError("");

    const payload = {
      isim: form.isim,
      boyut: form.boyut,
      hamur: form.hamur,
      malzemeler: form.malzemeler,
      ozel: form.not,
      adet: form.adet,
      toplam: total,
    };

    axios
      .post("https://reqres.in/api/pizza", payload, {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      })
      .then((res) => {
        console.log("Sipariş Yanıtı:", res.data);
        setSiparisData({
          ...payload,
          extraPrice,
          total,
        });
        history.push("/onay");
      })
      .catch((err) => {
        console.error("Sipariş Hatası:", err);
        setApiError("Sipariş gönderilemedi. Lütfen internet bağlantınızı kontrol edin.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Header />

      <div className="form-page">
        <h2 className="pizza-title">Position Absolute Acı Pizza</h2>

        <div className="pizza-rating">
          <span className="pizza-price">85.50₺</span>
          <span>4.9</span>
          <span>(200)</span>
        </div>

        <p className="pizza-desc">
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana
          göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha
          sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,
          genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
          kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Boyut + Hamur */}
          <div className="form-row">
            <div className="form-group">
              <label className="field-label">
                Boyut Seç <span className="required">*</span>
              </label>
              <div className="size-options">
                {["S", "M", "L"].map((s) => (
                  <div
                    key={s}
                    className={`size-option ${form.boyut === s ? "active" : ""}`}
                    onClick={() => handleSizeChange(s)}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="field-label">
                Hamur Seç <span className="required">*</span>
              </label>
              <select value={form.hamur} onChange={handleHamurChange}>
                <option value="">--Hamur Kalınlığı Seç--</option>
                <option value="İnce">İnce</option>
                <option value="Normal">Normal</option>
                <option value="Kalın">Kalın</option>
              </select>
            </div>
          </div>

          {/* Ek Malzemeler */}
          <div className="extras-section">
            <div className="extras-title">Ek Malzemeler</div>
            <div className="extras-note">
              En Fazla 10 malzeme seçebilirsiniz. 5₺
            </div>
            <div className="extras-grid">
              {uniqueExtras.map((item) => (
                <label key={item} className="custom-checkbox">
                  <input
                    type="checkbox"
                    checked={form.malzemeler.includes(item)}
                    onChange={() => toggleExtra(item)}
                  />
                  <span className="checkmark"></span>
                  {item}
                </label>
              ))}
            </div>
          </div>

          <hr />

          {/* İsim */}
          <div className="form-group" style={{ marginBottom: 20 }}>
            <label className="field-label">
              İsim <span className="required">*</span>
            </label>
            <input
              type="text"
              placeholder="Adınızı giriniz"
              value={form.isim}
              onChange={handleIsimChange}
              minLength={3}
            />
            {errors.isim && <div className="error-msg">{errors.isim}</div>}
          </div>

          {/* Sipariş Notu */}
          <div className="form-group" style={{ marginBottom: 10 }}>
            <label className="field-label">Sipariş Notu</label>
            <textarea
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              value={form.not}
              onChange={handleNoteChange}
            />
          </div>

          <hr />

          {/* Adet + Toplam + Submit */}
          <div className="order-bottom">
            <div className="quantity-box">
              <button type="button" onClick={() => changeAdet(-1)}>-</button>
              <span className="qty-val">{form.adet}</span>
              <button type="button" onClick={() => changeAdet(1)}>+</button>
            </div>

            <div className="order-summary-wrapper">
              <div className="order-summary">
                <h4>Sipariş Toplamı</h4>
                <div className="summary-row">
                  <span>Seçimler</span>
                  <span>{extraPrice.toFixed(2)}₺</span>
                </div>
                <div className="summary-row total">
                  <span>Toplam</span>
                  <span>{total.toFixed(2)}₺</span>
                </div>
              </div>

              <button
                className="submit-btn"
                type="submit"
                disabled={!isValid || loading}
              >
                {loading ? "GÖNDERİLİYOR..." : "SİPARİŞ VER"}
              </button>
            </div>
          </div>

          {apiError && (
            <p style={{ color: "var(--red)", marginTop: 15, textAlign: "center" }}>
              {apiError}
            </p>
          )}
        </form>
      </div>

      <Footer />
    </div>
  );
}
