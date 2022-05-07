import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { moralisLoginModalAtom } from "../../utils/atoms";
import LoginMetaMaskButton from "../Button/LoginMetaMaskButton";
import LoginWalletConnectkButton from "../Button/LoginWalletConnectButton";
import Modal, { ModalProps } from "../Modal";

const MoralisLoginModal = ({ ...modalProps }: Omit<ModalProps, "children">) => {
  const [visible, setVisible] = useAtom(moralisLoginModalAtom);
  const router = useRouter();

  const callback = () => {
    router.push("/wallet");
  };

  return (
    <Modal open={visible} onClose={() => setVisible(false)}>
      <div className="space-y-2">
        <LoginMetaMaskButton
          callback={callback}
          full
          fontWeight="thin"
          border
        />
        <LoginWalletConnectkButton
          callback={callback}
          full
          fontWeight="thin"
          border
        />
      </div>
    </Modal>
  );
};

export default MoralisLoginModal;
