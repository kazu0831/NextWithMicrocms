import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t-2 h-48 bg-slate-100 bg-opacity-50">
      <div className="p-5 flex flex-col items-center justify-center">
        <Link className="text-white text-2xl font-bold" href="/">
          Kz blog
        </Link>

        <ul className="mt-8 flex">
          <li className="text-center text-lg mr-8 hover:underline">
            <Link
              className="text-white"
              target="_blank"
              href="https://kz-portfolio.vercel.app/"
            >
              About me
            </Link>
          </li>

          <li className="text-center text-lg hover:underline">
            <Link className="text-white" href="/">
              Services(準備中)
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
