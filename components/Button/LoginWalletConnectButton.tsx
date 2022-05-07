import { useMoralis } from "react-moralis";
import Button, { ButtonProps } from ".";

interface LoginMetaMask extends ButtonProps {
  callback?: () => void;
}

const LoginWalletConnectkButton = ({
  callback,
  ...buttonProps
}: LoginMetaMask) => {
  const { authenticate, isAuthenticated, isAuthenticating, isLoggingOut } =
    useMoralis();

  const handleLogin = async () => {
    console.log("click");
    try {
      const foo = await authenticate({
        provider: "walletconnect",
      });
      console.log({ foo });
      if (callback) callback();
    } catch (error) {
      console.error(error);
    }
  };

  console.log({ isAuthenticated, isLoggingOut, isAuthenticating });

  return (
    <Button onClick={handleLogin} {...buttonProps}>
      <span>📲</span>Log in with WalletConnect
    </Button>
  );
};

export default LoginWalletConnectkButton;
