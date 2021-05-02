import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
// import Search from "../Model&Controller/Search.js";
import "../Styles/Artist.scss";

//Display Artist from API call result
const Artist = ({ artistsData }) => {
  //   const artistData = {
  //     id: 510,
  //     name: "Maroon 5",
  //     url: " http://www.bandsintown.com/Maroon5?came_from=67",
  //     image_url: "https://s3.amazonaws.com/bit-photos/large/7481529.jpeg",
  //     facebook_page_url: " https://www.facebook.com/maroon5",
  //   };

  function DisplayArtist(data) {
    return (
      <div className="artist">
        <Card className="card-artist">
          <Card.Img variant="top" src={data.image_url} />
          <Card.Body>
            <Card.Title className="artist-title">{data.name}</Card.Title>
            <Card.Text>
              {data.facebook_page_url !== "" ? (
                <a href={data.facebook_page_url} target="_blank">
                  Visit Facebook Page
                </a>
              ) : null}
            </Card.Text>
            <Button>Get Event Details</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
  function DisplayArtistMessage() {
    return (
      <div>
        <h1 className="heading">No Artist Found!😕</h1>
      </div>
    );
  }

  return artistsData !== ""
    ? DisplayArtist(artistsData)
    : DisplayArtistMessage();
};
export default Artist;
