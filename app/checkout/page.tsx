"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Checkout() {
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    script.onload = () => setRazorpayLoaded(true); // Ensure Razorpay is loaded
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    if (!razorpayLoaded) {
      alert("Payment system is still loading. Please wait...");
      return;
    }

    const options = {
      key: "rzp_test_3tR2I3WfX9KBtm", // Replace with your Razorpay Key ID
      amount: 100 * 100, // Amount in paise (₹100 = 10000 paise)
      currency: "INR",
      name: "Trustbridge",
      description: "Premium Trust Level Access",
      image: "https://example.com/your_logo.png", // Optional: Your logo
      prefill: {
        name: "Rohit", // Prefilled customer name
        email: "rohit@example.com",
        contact: "987643xxxx",
      },
      theme: {
        color: "#3399cc",
      },
      handler: function (response: any) {
        alert("Payment Successful!");
        console.log("Payment ID:", response.razorpay_payment_id);
        console.log("Order ID:", response.razorpay_order_id);
        console.log("Signature:", response.razorpay_signature);
      },
    };

    const razorpayInstance = new (window as any).Razorpay(options);
    razorpayInstance.open();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Upgrade to Premium Trust Level</h2>
      <p className="mb-6 text-gray-600">
        Get full background checks, unlimited project values, and priority dispute resolution.
      </p>
      <Button
        id="rzp-button1"
        onClick={handlePayment}
        className="px-6 py-3 text-lg"
        disabled={!razorpayLoaded} // Disable button until script is loaded
      >
        {razorpayLoaded ? "Pay ₹100" : "Loading..."}
      </Button>
    </div>
  );
}
