import React from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

export default function Anasayfa() {
  const history = useHistory();

  return (
    <div className="container anasayfa">
      <h1 className="text-center mt-5">Teknolojik Yemekler</h1>

      <div className="hero">
        <h3>Position Absolute Acı Pizza</h3>
        <p>
          En iyi pizzaları sizin için hazırlıyoruz. Şimdi hemen sipariş ver!
        </p>

        <Button
          color="warning"
          onClick={() => history.push("/siparisformu")}
          className="mt-3"
        >
          SİPARİŞ OLUŞTUR
        </Button>
      </div>
    </div>
  );
}
