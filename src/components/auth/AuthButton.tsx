import { AvatarIcon } from "../icons/AvatarIcon";

const AuthButton = () => {
  return (
    <button className="flex items-center gap-2 header-action">
      <AvatarIcon />
      <span
        className={"text-white text-sm border-b border-dashed border-white"}
      >
        Увійти
      </span>
    </button>
  );
};
export default AuthButton;
