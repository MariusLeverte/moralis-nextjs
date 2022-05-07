import clsx, { ClassValue } from "clsx";

const Grid: React.FC<{
  className?: ClassValue;
}> = ({ children, className }) => (
  <div
    className={clsx(
      "grid gap-4 grid-cols-2 md:grid-cols-6 lg:grid-cols-12 lg:gap-10",
      className
    )}
  >
    {children}
  </div>
);

export default Grid;
