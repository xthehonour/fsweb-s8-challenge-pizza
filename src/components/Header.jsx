import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="main-header">
      <h1 className="logo"><img src="../images/iteration-1-images/logo.svg" /></h1>

      <div className="breadcrumb">
        <span>Anasayfa</span> <span> &gt; </span> 
        <span className="current">Sipariş Oluştur</span>
      </div>
    </header>
  );
}
