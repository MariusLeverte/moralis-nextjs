import { useAtomValue } from "jotai";
import { useCallback, useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { Transactions } from "../types/moralis";
import { moralisChain } from "../utils/atoms";

type Options = {
  from_block?: number | undefined;
  to_block?: number | undefined;
  from_date?: string | undefined;
  to_date?: string | undefined;
  offset?: number | undefined;
  limit?: number | undefined;
};

const useMoralisTransactions = (options: Options) => {
  const { isAuthenticated, isInitialized } = useMoralis();
  const { account } = useMoralisWeb3Api();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [transactions, setTransactions] = useState<Transactions | null>(null);
  const chain = useAtomValue(moralisChain);

  const fetchTransactions = useCallback(async () => {
    try {
      setLoading(true);
      const transactions = await account.getTransactions({
        chain: chain,
        ...options,
      });

      return setTransactions(transactions);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [account, options, chain]);

  useEffect(() => {
    if (transactions) return;
    if (!isInitialized) return;
    if (!isAuthenticated) return;
    if (loading) return;

    fetchTransactions();
  }, [
    isInitialized,
    isAuthenticated,
    fetchTransactions,
    transactions,
    loading,
  ]);

  return { data: transactions, loading, error };
};

export default useMoralisTransactions;
