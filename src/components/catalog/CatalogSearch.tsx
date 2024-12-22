import { FC } from "react";

const CatalogSearch: FC = () => {
  return (
    <input
      type="search"
      name="search"
      id="search"
      placeholder="Пошук"
      className="p-2 pl-4 rounded-full w-[500px]"
    />
  );
};

export default CatalogSearch;
