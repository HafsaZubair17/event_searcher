import React, { useState } from "react";
import { getData } from "../Model/Artist";
import "../../Styles/Header.scss";
import SearchBar from "material-ui-search-bar";
import { SocialIcon } from "react-social-icons";

// Header of Web Page
const Header = ({
  artistLocate,
  setArtistData,
  setInitial,
  setArtistName,
  setEventInitial,
  setLoading,
}) => {
  const [search, setSearch] = useState("");
  return (
    <div className="row">
      {/* Bands in Town Official Logo */}
      <a href="https://www.bandsintown.com/" target="_blank">
        <img
          className="logo"
          src="/logo.png"
          href="https://www.bandsintown.com/"
          alt="logo"
        />
      </a>

      {/* Search Bar to take user input */}
      <SearchBar
        autoFocus
        className="search"
        data-testid="search"
        value={search}
        onChange={(value) => setSearch(value)}
        onRequestSearch={(value) =>
          getData(
            value,
            setArtistData,
            setInitial,
            setArtistName,
            setEventInitial,
            setLoading,
            artistLocate,
            setSearch
          )
        }
        placeholder="Search the artist here!"
      />

      {/* Twitter icon and link of bands in town API  */}
      <SocialIcon
        className="twitter"
        url="https://twitter.com/Bandsintown?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        target="_blank"
        bgColor="#126e82"
        fgColor=" #d8e3e7"
      />
    </div>
  );
};

export default Header;
