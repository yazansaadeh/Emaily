import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchUser } from "../store";
import Payments from "./Payments";

function Header() {
  const { auth } = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  let content;
  if (auth.data === null) {
    content = null;
  } else if (auth.data === false) {
    content = (
      <li>
        <a href="/auth/google">Login With Google</a>
      </li>
    );
  } else {
    content = [
      <li key={1}>
        <Payments />
      </li>,
      <li key={3} style={{ margin: "0 10px" }}>
        Credits:{auth.credits}
      </li>,
      <li key={2}>
        <a href="/api/logout">Logout</a>
      </li>,
    ];
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={auth.data ? "/surveys" : "/"} className="left brand-logo">
          Emaily
        </Link>
        <ul className="right">{content}</ul>
      </div>
    </nav>
  );
}
export default Header;
