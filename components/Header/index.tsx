import { useSetAtom } from "jotai";
import { useCallback } from "react";
import { useMoralis } from "react-moralis";
import { moralisLoginModalAtom } from "../../utils/atoms";
import Button from "../Button";

const Header = () => {
  const setVisible = useSetAtom(moralisLoginModalAtom);
  const { isAuthenticated, Moralis } = useMoralis();

  const handleAuthButton = useCallback(() => {
    if (!isAuthenticated) {
      setVisible(true);
    } else {
      Moralis.User.logOut();
    }
  }, [isAuthenticated, Moralis, setVisible]);

  return (
    <header className="flex min-h-[80px] justify-between items-center h-full max-w-[1440px] px-4 lg:px-20">
      <h1 className="font-bold text-2xl">Columbus</h1>
      <Button onClick={handleAuthButton} border>
        {isAuthenticated ? "Logg ut" : "Oppdag ny verden"}
      </Button>
    </header>
  );
};

export default Header;
