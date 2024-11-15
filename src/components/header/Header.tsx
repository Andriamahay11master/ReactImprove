import { UserType } from "../../model/UserType";
import "./header.scss";
interface UserProps {
  user: UserType;
}
const Header = ({ user }: UserProps) => {
  return (
    <div className="headerWrapper">
      <img src={user?.picture?.medium} alt="img" />
      <p>
        {user?.name?.first} {user?.name?.last}
      </p>
    </div>
  );
};

export default Header;
