"use client";
import Link from "next/link";
import { useAuth, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import logo from "../../public/logo.png";
import { Button } from "./ui/button";
import { useState } from "react";

export function Navbar() {
  const { userId } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-center mt-2 w-full">
      <nav className="flex items-center justify-between w-full max-w-4xl p-4 border border-gray-200 rounded-full">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="logo" width={50} height={50} />
        </Link>
        {/* Bouton du menu mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {/* Icône du menu */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        {/* Liens de navigation */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:justify-center md:space-x-5`}
        >
          <div className="flex flex-col md:flex-row justify-between space-x-5 items-center">
            <Link
              href="/fonctionnalites"
              className="text-white hover:text-greenbull py-2 md:py-0"
            >
              Fonctionnalités
            </Link>
            <Link
              href="/prix"
              className="text-white hover:text-greenbull py-2 md:py-0"
            >
              Prix
            </Link>
            <Link
              href="/documentation"
              className="text-white hover:text-greenbull py-2 md:py-0"
            >
              Documentation
            </Link>
            <Link
              href="/dashboard"
              className="text-white hover:text-greenbull py-2 md:py-0"
            >
              Dashboard
            </Link>
          </div>
        </div>
        {/* Boutons d'authentification */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          {userId ? (
            <>
              <Button className="rounded-full border-2 border-white bg-black text-white">
                Contact
              </Button>
              <UserButton appearance={{ elements: { avatarBox: "w-8 h-8" } }} />
            </>
          ) : (
            <>
              <Link href="/sign-up">
                <Button className="rounded-full border-2 border-white bg-black text-white">
                  S'inscrire
                </Button>
              </Link>
              <Link href="/sign-in">
                <Button className="rounded-full border-2 border-white bg-black text-white">
                  Se connecter
                </Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
