import React from "react";
import {
  Button
} from "react-bootstrap";

export default function Header() {
  return (
    <div className="bg-dark text-white" style={{ paddingBottom: "100px" }}>
      <div className="d-flex justify-content-evenly align-items-center p-3 text-white bg-dark">
        <div className="d-flex align-items-center gap-3">
          <h1 className="mb-0">SHOP FASHION</h1>
          <p className="mb-0">Home</p>
          <p className="mb-0">Products</p>
          <p className="mb-0">Men</p>
          <p className="mb-0">Women</p>
          <p className="mb-0">Contact</p>
        </div>
        <div className="w-25">
          <Button>Cart</Button>
        </div>
      </div>
    </div>
  );
}
