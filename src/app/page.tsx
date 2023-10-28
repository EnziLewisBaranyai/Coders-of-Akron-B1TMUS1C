import User from "@/components/User";
import { buttonVariants } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import "@/styles/styles.css"

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1 className="text-4xl font-semibold">Welcome to B1TMUS1C</h1>
      <div className="flex justify-center getStarted">
        <Link className={buttonVariants()} href="/admin">
          Get Started
        </Link>
      </div>
    </div>
  );
}
