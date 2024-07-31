import React from "react";
import footerLinks from "../../assets/footer-links.svg";
import logo from "../../assets/logo.svg";

function Footer() {
  return (
    <footer className="bg-emigrate-blue flex justify-center items-center flex-col pt-8 ">
      <img src={footerLinks} />
      <div className="flex flex-col items-center mt-12">
        <img src={logo} />
        <p className="mt-2 text-white text-2xl font-semibold">Emigrate</p>
      </div>

      <div className="mt-4">
        <p className="text-sm text-white font-light opacity-50">
          Copyright 2024 Emigrate
        </p>
      </div>
      <div className="flex gap-8 py-4 text-white text-base font-regular underline">
        <p>Contact Us</p>
        <p>About Us</p>
        <p>Privacy Policy</p>
        <p>Manage Cookies</p>
        <p>Website Accesibility</p>
      </div>
    </footer>
  );
}

export default Footer;
