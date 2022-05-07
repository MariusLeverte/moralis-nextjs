import clsx from "clsx";
import React from "react";

export interface ButtonProps {
  full?: boolean;
  size?: "sm" | "md" | "lg";
  fontWeight: "thin" | "normal" | "bold";
  border?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  full,
  size = "md",
  fontWeight = "normal",
  border,
  children,
  ...buttonProps
}) => {
  const styles = {
    size: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
    },
    fontWeight: { thin: "font-thin", normal: "font-normal", bold: "font-bold" },
  };

  const classNames = clsx(
    "py-2 px-3 rounded-md",
    styles.size[size],
    styles.fontWeight[fontWeight],
    {
      "border border-black": border,
      "w-full": full,
    }
  );

  return (
    <button className={classNames} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
