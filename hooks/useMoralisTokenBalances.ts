import { useAtomValue } from "jotai";
import { useCallback, useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { TokenBalances } from "../types/moralis";
import { moralisChain } from "../utils/atoms";

const useMoralisTokenBalances = () => {
  const { isAuthenticated, isInitialized, Moralis } = useMoralis();
  const { account } = useMoralisWeb3Api();
  const chain = useAtomValue(moralisChain);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [balances, setBalances] = useState(null);

  const fetchTokenBalances = useCallback(async () => {
    try {
      setLoading(true);
      const balances = await account.getTokenBalances({ chain: chain });

      const balancesParsed = balances?.map((item) => ({
        ...item,
        balance: parseFloat(
          Moralis?.Units?.FromWei(item.balance, Number(item.decimals))
        ),
      }));

      return setBalances(balancesParsed);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [account, Moralis, chain]);

  useEffect(() => {
    if (balances) return;
    if (!isInitialized) return;
    if (!isAuthenticated) return;
    if (loading) return;

    fetchTokenBalances();
  }, [isInitialized, isAuthenticated, fetchTokenBalances, balances, loading]);

  return { data: balances, loading, error };
};

export default useMoralisTokenBalances;
