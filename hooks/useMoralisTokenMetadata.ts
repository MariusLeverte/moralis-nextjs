import { useAtomValue } from "jotai";
import { useCallback, useState } from "react";
import { useMoralisWeb3Api } from "react-moralis";
import { moralisChain } from "../utils/atoms";

const useMoralisTokenMetadata = () => {
  const { token } = useMoralisWeb3Api();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [tokenMetadata, setTokenMetadata] = useState(null);
  const chain = useAtomValue(moralisChain);

  const fetchTokenMetadata = useCallback(
    async (addresses) => {
      try {
        setLoading(true);
        const tokenMetadata = await token.getTokenMetadata({
          chain: chain,
          addresses: addresses,
        });
        setTokenMetadata(tokenMetadata);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [token, chain]
  );

  return { fetch: fetchTokenMetadata, loading, error, data: tokenMetadata };
};

export default useMoralisTokenMetadata;
