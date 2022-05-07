import clsx, { ClassValue } from "clsx";

const GridItem: React.FC<{
  className?: ClassValue;
}> = ({ children, className }) => (
  <div className={clsx("col-span-full", className)}>{children}</div>
);

export default GridItem;
