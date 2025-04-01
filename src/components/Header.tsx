import { shadow } from "@/styles/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import DarkModeToggle from "./DarkModeToggle";
import LogoutButton from "./LogoutButton";
import { getUser } from "@/auth/server";

async function Header() {
  const user = await getUser();
  return (
    <header
      className="relative flex h-24 px-3 w-full items-center justify-between bg-popover sm:px-8"
      style={{ boxShadow: shadow }}
    >
      <Link className="flex items-center gap-2" href="/">
        <Image
          priority
          className="rounded-full"
          src="/goatius.png"
          height={60}
          width={60}
          alt="logo"
        />
        <h1 className="text-2xl font-semibold leading-6">NoteGenie</h1>
      </Link>
      <div className="flex gap-4 ">
        {user ? (
          <LogoutButton />
        ) : (
          <>
            <Button className="hidden sm:block" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
        <DarkModeToggle />
      </div>
    </header>
  );
}

export default Header;
