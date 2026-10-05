import {Link} from "react-router"

export default function Navbar() {
  async function handleLogout() {
    localStorage.clear();
  }

  return (
    <>
      <nav className="flex sticky items-center justify-between flex-wrap bg-teal-500 p-6">
        <div name="left-nav" className="text-white space-x-2">
          <Link to="/pub/movie" className="text-xl tracking-tight font-bold">
            <span >121-Cinema</span>
          </Link>
          {/* <span class="text-lg">Genres</span> */}
        </div>
        <div name="middle-nav">
          <form action="search" method="get" className="flex-col">
            <input
              type="text"
              name="searchBar"
              placeholder="Search for Movie."
              className="rounded padding pt-1 pb-1 pl-2 pr-2"
              onChange={() => "search"}
            />
            <input
              type="submit"
              defaultValue="Search"
              className="rounded padding p-1 pl-2 pr-2 stroke white bg-teal-600 hover:bg-teal-800 text-white"
            />
          </form>
        </div>
        <div name="right-nav">
          <Link to="/user/login">
            <span
              className="text-white font-semibold text-xl tracking-tight"
              onClick={() => "login"}
            >
              Login
            </span>
          </Link>
          <span className="text-white font-extralight text-xl">|</span>
          <Link to="/user/add-user">
            <span
              className="text-white font-semibold text-xl tracking-tight"
              onClick={() => "register"}
            >
              Register
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}
