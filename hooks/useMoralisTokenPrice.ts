import { useAtomValue } from "jotai";
import { useCallback, useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { moralisChain } from "../utils/atoms";

interface TokenPriceProps {
  address: string;
  chain?: any;
}

const useMoralisTokenPrice = (options: TokenPriceProps) => {
  const { isInitialized, Moralis } = useMoralis();
  const { token } = useMoralisWeb3Api();
  const [price, setPrice] = useState(0);
  const chain = useAtomValue(moralisChain);

  const fetchTokenPrice = useCallback(async () => {
    try {
      const price = await token.getTokenPrice({ chain: chain, ...options });

      return setPrice(price);
    } catch (error) {
      console.error(error);
    }
  }, [token, options, Moralis, chain]);

  useEffect(() => {
    if (!isInitialized) return;
    if (price) return;

    fetchTokenPrice();
  }, [isInitialized, fetchTokenPrice, price]);

  return price;
};

export default useMoralisTokenPrice;
