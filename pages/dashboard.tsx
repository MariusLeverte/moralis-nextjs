import { useMoralis } from "react-moralis";
import Grid from "../components/Grid";
import GridItem from "../components/Grid/GridItem";
import HeaderUser from "../components/Header/HeaderUser";
import Dashboard from "../components/Layouts/Dashboard";
import RecentTransactions from "../components/Transactions/RecentTransactions";
import useMoralisUserAuthStatus from "../hooks/useMoralisUserAuth";

const WalletPromoPage = () => {
  const { user, isInitialized, account, isWeb3Enabled, Moralis } = useMoralis();
  useMoralisUserAuthStatus();
  // useMoralisNativeBalance();
  // useMoralisTokenBalances();

  // get user tokens

  // get price of token
  // Moralis.Web3.getTokenPrice(address)

  // // get TVL
  // Moralis.Web3.getTVL(address)

  // // get P&L;
  // Moralis.Web3.getPnL(address)

  // get Defi Positions (liquidity, lending, borrowing)
  // Moralis.Web3.getDefiPosition(address)

  console.log({ user, isInitialized, account, isWeb3Enabled, Moralis });

  return (
    <Dashboard>
      <HeaderUser />
      <Grid>
        <GridItem className="col-span-7">Foo</GridItem>
        <GridItem className="col-span-5">
          <RecentTransactions />
        </GridItem>
      </Grid>
    </Dashboard>
  );
};

export default WalletPromoPage;
