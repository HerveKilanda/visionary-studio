"use client";

import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  SignedOut,
  SignedIn,
  useAuth,
} from "@clerk/nextjs";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { Button } from "./ui/button";
export function Navbar() {
  const { userId } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center w-full items-center sm:flex-col">
      <nav className="flex justify-between items-center w-1/2 mt-2 border-2 border-slate-100 rounded-full p-4">
        <Link href="/">
          <Image src={logo} alt="logo" width={50} height={50} />
        </Link>
        <div className="flex items space-x-5">
          <Link
            href="/fonctionnalites"
            className="text-white hover:text-greenbull"
          >
            Fonctionnalités
          </Link>
          <Link href="/prix" className="text-white hover:text-greenbull">
            Prix
          </Link>
          <Link
            href="/documentation"
            className="text-white hover:text-greenbull"
          >
            Documentation
          </Link>
          <Link href="/dashboard" className="text-white hover:text-greenbull">
            Dashboard
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <SignedOut>
            <SignInButton mode="modal">
              <Button className="rounded-full border-2 border-white bg-black">
                Contact
              </Button>
            </SignInButton>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </SignedOut>
        </div>
      </nav>
    </div>
  );
}
