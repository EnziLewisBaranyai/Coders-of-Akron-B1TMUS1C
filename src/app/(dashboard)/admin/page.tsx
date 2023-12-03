import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import "@/styles/styles.css"

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log(session?.user);

  if (session?.user) {
    return (
      <div>
        <h2 className="text-4xl font-semibold text-orange-400">
          Hello {session?.user.username || session?.user.name}! You have successfully signed in. 
        </h2>
        <br/>
        <p className="text-orange-400 text-2xl">
          If it is your first time here, make sure to update your profile and sign into your Spotify account.
        </p>
      </div>
    );
  }

  return (
    <h2 className="text-4xl font-semibold">
      Please{" "}
      <Link
        href="/sign-in"
        className="underline"
      >
        sign in
      </Link>{" "}
      to continue.
    </h2>
  );
};

export default page;
