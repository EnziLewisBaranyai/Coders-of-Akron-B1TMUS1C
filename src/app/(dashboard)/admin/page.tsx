import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import "@/styles/styles.css"

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log(session?.user);

  if (session?.user) {
    return (
      <h2 className="text-4xl font-semibold">
        Welcome {session?.user.username || session?.user.name}. Let's get
        started.
      </h2>
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
