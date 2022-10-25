import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import s from "../style/NavBar.module.css";
import imagen from "../images/pacman.gif";
import { getAllVideogames } from "../redux/actions";
import { useDispatch } from "react-redux";

export default function NavBar() {
  const dispatch = useDispatch();

  const handleRefresh = (e) => {
    e.preventDefault();
    dispatch(getAllVideogames());
  };

  return (
    <nav className={s.nav}>
      <div className={s.busqueda}>
        <SearchBar />
      </div>
      <div className={s.imagencita}>
        <img src={imagen} alt="pacman.gif" className={s.gif} />
      </div>
      <div className={s.search}>
        <button className={s.btn} onClick={(e) => handleRefresh(e)}>
          Refresh
        </button>
        <span className={s.opcion}>
          <NavLink to={"/create"} className={s.to}>
            {" "}
            Create Videogame
          </NavLink>
        </span>
      </div>
    </nav>
  );
}
