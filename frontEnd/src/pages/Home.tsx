import { Link } from "react-router-dom";
import Header from "../components/header/Header";

function Home() {
  const userInfo = localStorage.getItem("userInfo");

  return (
    <>
      {userInfo ? (
        <Link to="/problemlist">
            <p className=" p-2 rounded-md bg-red-800 w-auto"> Go to Problem List</p>
        </Link>
      ) : (
        <Header/>
      )}
    </>
  );
}

export default Home;
