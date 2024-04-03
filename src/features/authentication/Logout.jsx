import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";

import SpinnerMini from "../../ui/SpinnerMini";
import ButtonIcon from "../../ui/ButtonIcon";

import { useLogout } from "./useLogout";

function Logout() {
  const { isLoading, logout } = useLogout();
  return (
    <ButtonIcon onClick={logout} disabled={isLoading}>
      {isLoading ? <SpinnerMini /> : <HiOutlineArrowRightOnRectangle />}
    </ButtonIcon>
  );
}

export default Logout;
