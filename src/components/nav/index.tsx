import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="border-b-2 bg-slate-100 bg-opacity-50">
      <div className="container p-5">
        <Link className="text-2xl font-bold text-white" href="/blog">
          Kz blog
        </Link>
      </div>
    </header>
  );
};

export default Header;
