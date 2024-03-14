import { Link } from "react-router-dom";
import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";

const Navbar = () => {
  const { liked } = useContext(PhotoContext);

  return (
    <nav className="navbar">
      <Link to="/"> Home </Link> | <Link to="/favoritos"> Favoritos{liked.length ? `: ${liked.length}` : ""} </Link>
    </nav>
  );
};
export default Navbar;
