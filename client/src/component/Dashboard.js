import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      Dashboard
      <div className="fixed-action-btn">
        <Link
          style={{ position: "absolute", bottom: "50px", right: "50px" }}
          to="/surveys/new"
          className="btn-floating btn-large red"
        >
          <IoAdd />
        </Link>
      </div>
    </div>
  );
}
export default Dashboard;
