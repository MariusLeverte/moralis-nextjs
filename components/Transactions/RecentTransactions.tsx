import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import useMoralisTokenBalances from "../../hooks/useMoralisTokenBalances";
import useMoralisTokenMetadata from "../../hooks/useMoralisTokenMetadata";
import useMoralisTransactions from "../../hooks/useMoralisTransactions";

const RecentTransactions = () => {
  const { user } = useMoralis();
  const walletAddress = user?.attributes?.ethAddress;
  const { data: transactions } = useMoralisTransactions();
  const { data: balances } = useMoralisTokenBalances();
  //   const { fetch: fetchTokenMetadata, data: tokenMetadata } =
  //     useMoralisTokenMetadata();

  useEffect(() => {
    if (!transactions?.result) return;
    if (!balances) return;

    const addresses = [
      ...new Set(
        transactions.result.flatMap((t) => [t.block_hash, t.hash, t.input])
      ),
    ];
    balances.find((b) => {
      const match = addresses.includes(b.token_address);
      console.log({ match });
    });
    // fetchTokenMetadata(addresses);
  }, [transactions?.result, balances]);

  console.log({ transactions, walletAddress, balances });

  return (
    <div>
      <h3 className="font-semibold text-lg">Siste aktivitet</h3>
    </div>
  );
};

export default RecentTransactions;
