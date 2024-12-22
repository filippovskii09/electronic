import { FC } from "react";
import { Link } from "react-router";
import FavoriteIcon from "../icons/FavoriteIcon";

const FavoriteButton: FC = () => {
  return (
    <Link to="/favorite" className="w-8 h-8 header-action relative">
      <FavoriteIcon className="w-full h-full" />
    </Link>
  );
};

export default FavoriteButton;
