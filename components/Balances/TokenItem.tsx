import useMoralisTokenPrice from "../../hooks/useMoralisTokenPrice";
import { Token } from "../../types/moralis";
/**
 *  {
  balance: string;
  token_address: string;
  name: string;
  symbol: string;
  logo?: string;
  thumbnail?: string;
  decimals: string;
};
 */

const TokenItem = ({ item }: { item: Token }) => {
  const price = useMoralisTokenPrice({
    address: item.token_address,
    chain: "eth",
  });

  console.log({ item, price });

  return (
    <div className="flex justify-between">
      <span className="flex-1">
        <strong>{item.name}</strong>{" "}
        <span className="opacity-50">{item.symbol}</span>
      </span>
      <span>{item.balance}</span>
    </div>
  );
};

export default TokenItem;
