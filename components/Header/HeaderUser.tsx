import ChainButton from "../Button/ChainButton";

const HeaderUser = () => {
  return (
    <div className="flex justify-between">
      <h2 className="font-semibold text-3xl">Velkommen ⛵️</h2>
      <div>
        <ChainButton />
      </div>
    </div>
  );
};

export default HeaderUser;
