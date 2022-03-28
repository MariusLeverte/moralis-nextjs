import { useMoralis } from "react-moralis";
import useMoralisUserAuthStatus from "../hooks/useMoralisUserAuth";

const WalletPromoPage = () => {
  const { user, isAuthUndefined, isUnauthenticated } = useMoralis();
  useMoralisUserAuthStatus();

  console.log({ isAuthUndefined, isUnauthenticated });

  return <p>Hei på deg</p>;
};

export default WalletPromoPage;
