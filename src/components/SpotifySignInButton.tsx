import { FC, ReactNode } from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

interface SpotifySignInButtonProps {
  children: ReactNode;
}
const SpotifySignInButton: FC<SpotifySignInButtonProps> = ({ children }) => {
  const loginWithSpotify = () =>
    signIn("spotify", { callbackUrl: "https://localhost:3000/admin" });

  return (
    <Button onClick={loginWithSpotify} className="w-full">
      {children}
    </Button>
  );
};

export default SpotifySignInButton;
