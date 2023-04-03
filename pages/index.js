import Link from "next/link";
import React from "react";

const home = () => {
  return (
    <div>
      <h1>Homepage Welcome</h1>

      <Link href="/products"> See-Products </Link>
      <Link href="/events"> See-Events </Link>

    </div>
  );
};

export default home;
