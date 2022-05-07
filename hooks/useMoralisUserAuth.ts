import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { moralisLoginModalAtom } from "../utils/atoms";

const useMoralisUserAuthStatus = () => {
  const setVisible = useSetAtom(moralisLoginModalAtom);
  const { isAuthUndefined, isAuthenticating, isAuthenticated } = useMoralis();

  useEffect(() => {
    setVisible(false);
    if (!isAuthUndefined) return;
    if (isAuthenticating) return;
    if (isAuthenticated) return;

    setVisible(true);
  }, [isAuthUndefined, isAuthenticating, isAuthenticated]);
};

export default useMoralisUserAuthStatus;
