import { useAtomValue } from "jotai";
import { useCallback, useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { moralisChain } from "../utils/atoms";

const useMoralisNativeBalance = () => {
  const { isAuthenticated, isInitialized } = useMoralis();
  const { account } = useMoralisWeb3Api();
  const [balance, setBalance] = useState();
  const chain = useAtomValue(moralisChain);

  const fetchTokenBalances = useCallback(async () => {
    const nativeBalance = await account.getNativeBalance({ chain: chain });

    console.log({ nativeBalance });

    return setBalance(nativeBalance);
  }, [account, chain]);

  useEffect(() => {
    if (!isInitialized) return;
    if (!isAuthenticated) return;

    fetchTokenBalances();
  }, [isInitialized, isAuthenticated, fetchTokenBalances]);

  return balance;
};

export default useMoralisNativeBalance;
