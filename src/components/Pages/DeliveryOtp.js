import React from "react";
import Head from "../javascript/Head";
import { OTP2 } from "../javascript/OTP";
import "../css/deliveryotp.css";
import Footer from "../javascript/Footer";

export default function DeliveryOtp() {
  return (
    <>
      <Head />
      <div id="otp-div-del">
        <h2>Phone Number Verification</h2>
        <OTP2 />
      </div>
      <Footer />
    </>
  );
}
