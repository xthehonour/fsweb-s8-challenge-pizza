import React from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

export default function Onay() {
  const history = useHistory();
  return (
    <div className="container text-center mt-5">
      <h2>Siparişiniz Alındı 🎉</h2>
      <p>Pizza hazırlanmaya başlandı!</p>

      <Button color="warning" onClick={() => history.push("/")}>
        Anasayfaya Dön
      </Button>
    </div>
  );
}
