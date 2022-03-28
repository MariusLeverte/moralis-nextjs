import { useAtom, useSetAtom } from "jotai";
import { useCallback } from "react";
import { useMoralis } from "react-moralis";
import { moralisLoginModalAtom } from "../../utils/atoms";
import Button from "../Button";
import styles from "./Header.module.scss";

const Header = () => {
  const setVisible = useSetAtom(moralisLoginModalAtom);
  const { isAuthenticated, logout, user } = useMoralis();

  const handleAuthButton = useCallback(() => {
    if (!isAuthenticated) {
      setVisible(true);
    } else {
      logout();
    }
  }, [isAuthenticated, logout]);

  return (
    <>
      <header className={styles.header}>
        <h1>Hello world</h1>
        <Button onClick={handleAuthButton}>
          {isAuthenticated ? "Logg ut" : "Logg inn"}
        </Button>
      </header>
    </>
  );
};

export default Header;
