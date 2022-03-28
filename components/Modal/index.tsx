import styles from "./Modal.module.scss";

export interface ModalProps {
  open: boolean;
  onClose: (boolean) => void;
  children: React.ReactChildren;
}

const Modal = ({ open, onClose, children }: ModalProps) => {
  if (!open) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.card}>{children}</div>
      {onClose && <button onClick={onClose} />}
    </div>
  );
};

export default Modal;
