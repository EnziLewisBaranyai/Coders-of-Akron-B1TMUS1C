import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Speaker } from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { signOut } from "next-auth/react";
import UserAccountnav from "./UserAccountnav";
import "@/styles/navBar.css"

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className=" py-2 border-b borderline fixed w-full z-10 top-0 navBackground">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Speaker />
        </Link>
        {session?.user ? (
          <UserAccountnav />
        ) : (
          <Link className={buttonVariants()} href="/sign-in">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
