import CatalogIcon from "../icons/CatalogIcon";
import { FC } from "react";

const CatalogButton: FC = () => {
  return (
    <button
      className="py-3 px-2 w-[300px] text-white text-lg flex items-center gap-4"
      // onMouseLeave={() => setIsCatalogOpen(false)}
      // onMouseEnter={() => setIsCatalogOpen(true)}
      // onClick={() => setIsCatalogOpen((prevState) => !prevState)}
      // aria-expanded={isCatalogOpen ? "true" : "false"}
      aria-controls="catalog-menu"
    >
      <CatalogIcon />
      <p>Каталог</p>
    </button>
  );
};

export default CatalogButton;
