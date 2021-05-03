import React, { useState } from "react";
import "./ArtistView";
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
}) => {
  const [search, setSearch] = useState("");

  //  API Call to get Artist Data
  const getData = (userInput) => {
    document
      .getElementById("artist")
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
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
        if (!res.data.error) {
          setArtistData(res.data);
          setArtistName(res.data.name);
        } else {
          setArtistData("");
        }
      })
      .catch((err) => {
        console.log(err, "Error getting tags");
      });
  };

  return (
    <div className="row">
      <a href="https://www.bandsintown.com/" target="_blank">
        <img
          className="logo"
          src="/logo.png"
          href="https://www.bandsintown.com/"
        />
      </a>

      <SearchBar
        className="search"
        value={search}
        onChange={(value) => setSearch(value)}
        onRequestSearch={(value) => getData(value)}
        placeholder="Search the artist here!"
      />

      <SocialIcon
        className="twitter"
        url="https://twitter.com/Bandsintown?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        target="_blank"
        bgColor="#00CEC8"
        fgColor=" #000000"
      />
    </div>
  );
};

export default Header;
