import { useAtom } from "jotai";
import Button from ".";
import { moralisChain } from "../../utils/atoms";

const ChainButton = () => {
  const [chain, setChain] = useAtom(moralisChain);

  const handleSwapChain = () => {
    setChain(chain === "eth" ? "bsc" : "eth");
  };

  return (
    <Button onClick={handleSwapChain} border>
      {chain}
    </Button>
  );
};

export default ChainButton;
