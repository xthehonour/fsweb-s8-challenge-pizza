import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import "./SiparisFormu.css";

export default function SiparisFormu() {
  const history = useHistory();

  const [size, setSize] = useState("");
  const [hamur, setHamur] = useState("");
  const [extras, setExtras] = useState([]);
  const [note, setNote] = useState("");
  const [adet, setAdet] = useState(1);

  const extraList = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalapeno",
    "Biber",
    "Ananas",
    "Kabak",
  ];

  const toggleExtra = (e) => {
    const value = e.target.value;

    if (extras.includes(value)) {
      setExtras(extras.filter((x) => x !== value));
    } else {
      if (extras.length < 10) setExtras([...extras, value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!size || !hamur) {
      alert("Boyut ve Hamur seçilmelidir.");
      return;
    }

    history.push("/onay");
  };

  const extraPrice = extras.length * 5;
  const total = 85.5 + extraPrice + adet * 10;

  return (
    <>
      <Header />

      <div className="container form-page">
        <h2 className="title">Position Absolute Acı Pizza</h2>
        <p className="rating">
          <strong>85.50₺</strong>
          <span> ⭐ 4.9 (200)</span>
        </p>

        <p className="desc-text">
          Frontend dev olarak hâlâ position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
          Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış,
          daha sonra genellikle odun ateşinde fırında yüksek sıcaklıkta pişirilen lezzetli bir yemektir.
        </p>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Boyut Seç *</Label>
                <div className="size-options">
                  {["Küçük", "Orta", "Büyük"].map((b) => (
                    <label key={b}>
                      <Input
                        type="radio"
                        name="size"
                        value={b}
                        onChange={(e) => setSize(e.target.value)}
                      />
                      {b}
                    </label>
                  ))}
                </div>
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label>Hamur Seç *</Label>
                <Input
                  type="select"
                  value={hamur}
                  onChange={(e) => setHamur(e.target.value)}
                >
                  <option value="">Hamur Kalınlığı</option>
                  <option>İnce</option>
                  <option>Normal</option>
                  <option>Kalın</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <FormGroup className="mt-2">
            <Label>Ek Malzemeler</Label>
            <p className="note">(En fazla 10 malzeme seçebilirsiniz. 5₺)</p>

            <div className="extras">
              {extraList.map((x) => (
                <div key={x}>
                  <Input type="checkbox" value={x} onChange={toggleExtra} />
                  {x}
                </div>
              ))}
            </div>
          </FormGroup>

          <FormGroup className="mt-4">
            <Label>Sipariş Notu</Label>
            <Input
              type="text"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </FormGroup>

          <Row className="mt-4 align-items-center">
            <Col md={4}>
              <div className="adetBox">
                <Button
                  onClick={() => setAdet(adet > 1 ? adet - 1 : 1)}
                  color="warning"
                >
                  -
                </Button>
                <span className="adet">{adet}</span>
                <Button onClick={() => setAdet(adet + 1)} color="warning">
                  +
                </Button>
              </div>
            </Col>

            <Col md={4}></Col>

            <Col md={4}>
              <Card>
                <CardBody>
                  <h5>Sipariş Toplamı</h5>
                  <p>Seçimler: {extraPrice}₺</p>
                  <p className="total">Toplam: {total.toFixed(2)}₺</p>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Button className="w-100 submitBtn" type="submit">
            SİPARİŞ VER
          </Button>
        </Form>
      </div>
    </>
  );
}
