import { FC } from "react";
import CatalogButton from "../catalog/CatalogButton";
import Container from "../Container";
import CartButton from "../cart/CartButton";
import FavoriteButton from "../favorite/FavoriteButton";
import CatalogSearch from "../catalog/CatalogSearch";
import "./header.css";
import CompareButton from "../compare/CompareButton";
import AuthButton from "../auth/AuthButton";

const Header: FC = () => {
  return (
    <header className="py-2 header-gradient">
      <Container className="relative flex items-center justify-between">
        <CatalogButton />
        <div className="flex items-center gap-6">
          <CatalogSearch />
          <AuthButton />
          <CompareButton />
          <FavoriteButton />
          <CartButton />
        </div>
      </Container>
    </header>
  );
};

export default Header;
