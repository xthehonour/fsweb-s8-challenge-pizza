import React from "react";

export default function Header() {
  return (
    <>
      <header className="form-header">
        <div className="header-logo">Teknolojik Yemekler</div>
        <div className="breadcrumb">
          Anasayfa - Seçenekler - <span className="active">Sipariş Oluştur</span>
        </div>
      </header>
      <div className="form-banner">
        <img
          src="/images/iteration-2-images/pictures/form-banner.png"
          alt="Pizza Banner"
        />
      </div>
    </>
  );
}
