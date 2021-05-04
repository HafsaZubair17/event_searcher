import React, { useState } from "react";
import axios from "axios";
import "../../Styles/Header.scss";
import SearchBar from "material-ui-search-bar";
import { SocialIcon } from "react-social-icons";

// Header of Web Page
const Header = ({
  setArtistData,
  setInitial,
  setArtistName,
  setEventInitial,
  setLoading,
  locate,
}) => {
  const [search, setSearch] = useState("");
  const getData = (userInput) => {
    setSearch("");
    setInitial(true);
    setEventInitial(false);
    setLoading(true);
    axios({
      method: "GET",
      url:
        "https://rest.bandsintown.com/artists/" + userInput + "?app_id=123123",
    })
      .then((res) => {
        setLoading(false);
        if (localStorage.getItem(userInput.toLowerCase()) !== null) {
          setArtistData(
            JSON.parse(localStorage.getItem(userInput.toLowerCase()))
          );
          setArtistName(userInput);
        } else {
          if (!res.data.error) {
            localStorage.clear();
            setArtistData(res.data);
            setArtistName(res.data.name);
            localStorage.setItem(
              res.data.name.toLowerCase(),
              JSON.stringify(res.data)
            );
          } else {
            setArtistData("");
          }
        }
        locate();
      })
      .catch((err) => {
        console.log(err, "Error Getting Artist Data");
      });
  };

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
        onRequestSearch={(value) => getData(value)}
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
