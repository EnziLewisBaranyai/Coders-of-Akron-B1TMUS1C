import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Speaker } from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { signOut } from "next-auth/react";
import UserAccountnav from "./UserAccountnav";
import "@/styles/navBar.css";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  const speakerLink = session?.user ? "/feed" : "/";
  return (
    <div className=" py-2 border-b borderline fixed w-full z-10 top-0 navBackground">
      <div className="container flex items-center justify-between">
        <Link className="aclass" href={speakerLink}>
          <Speaker />
        </Link>
        {session?.user ? (
          /*<UserAccountnav />*/

          <nav>
            <ul>
              <li className="navItem">{session.user.name}</li>
              <li className="navItem">
                <Link href="/profile">Profile</Link>
              </li>
              <li className="navItem">
                <Link href="/yourmusic">Your Music</Link>
              </li>
              <UserAccountnav />
            </ul>
          </nav>
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
