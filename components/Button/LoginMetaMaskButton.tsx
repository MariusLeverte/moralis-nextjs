import { useMoralis } from "react-moralis";
import Button, { ButtonProps } from "../Button";

interface LoginMetaMask extends ButtonProps {
  callback?: () => void;
}

const LoginMetaMaskButton = ({ callback, ...buttonProps }: LoginMetaMask) => {
  const { authenticate } = useMoralis();

  const handleLogin = async () => {
    try {
      await authenticate({
        signingMessage: "Authorize linking of your wallet",
      });
      if (callback) callback();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button onClick={handleLogin} {...buttonProps}>
      <span>🦊</span>Log in with MetaMask
    </Button>
  );
};

export default LoginMetaMaskButton;
