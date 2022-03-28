import clsx from "clsx";
import styles from "./Button.module.scss";

export interface ButtonProps {
  full?: boolean;
  size?: "sm" | "md" | "lg";
  fontWeight: "thin" | "normal" | "bold";
}

const Button = ({
  full,
  size = "md",
  fontWeight = "normal",
  children,
  ...buttonProps
}: ButtonProps) => {
  const classNames = clsx(styles.button, styles[size], styles[fontWeight], {
    [styles.full]: full,
  });

  return (
    <button className={classNames} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
