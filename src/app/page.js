import React from "react";
import Link from "next/link";

export function sum (a, b) {
  return a + b;
}

function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  )
}

export default Page;

