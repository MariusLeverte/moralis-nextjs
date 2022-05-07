import useMoralisTokenBalances from "../../hooks/useMoralisTokenBalances";
import TokenItem from "./TokenItem";

const Balances = () => {
  const balances = useMoralisTokenBalances();

  console.log({ balances });

  return (
    <div className="list-none">
      {balances?.map((item) => (
        <TokenItem item={item} key={item.token_address} />
      ))}
    </div>
  );
};

export default Balances;
