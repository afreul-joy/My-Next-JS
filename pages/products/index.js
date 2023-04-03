import React from "react";
import Link from "next/link";

const productList = ({ productID = 100 }) => {
  return (
    <div>
      <Link href="/">Go-Home</Link>
      <br />
      <br />
      <Link href="/products/1"> product-01</Link>
      <br />
      <Link href="/products/2"> product-02</Link>
      <br />
      <Link href={`/products/${productID}`}> Dynamic Id: {productID} </Link>
    </div>
  );
};

export default productList;
