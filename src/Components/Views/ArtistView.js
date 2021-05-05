import React from "react";
import { getEventData } from "../Models/Event";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../Styles/Artist.scss";

//Display Artist from API call result
const Artist = ({
  eventLocate,
  artistData,
  artistName,
  setInitial,
  setEventInitial,
  setEventData,
  setEventLoading,
}) => {
  //Card to display artist data
  const DisplayArtist = (data) => {
    return (
      <>
        <h1 className="heading tracking-in-expand-fwd">An Artist Found!😀</h1>
        <div className="artist slit-in-vertical">
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
              <Button
                onClick={() =>
                  getEventData(
                    artistName,
                    eventLocate,
                    artistName,
                    setEventInitial,
                    setEventData,
                    setEventLoading
                  )
                }
              >
                Get Event Details
              </Button>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  };

  //Message Displayed if no artist found
  const DisplayArtistMessage = () => {
    return (
      <div>
        <h1 className="heading tracking-in-expand-fwd">No Artist Found!😕</h1>
        <div className="searchButton">
          <Button
            className="searchAgain tracking-in-expand-fwd"
            onClick={() => setInitial(false)}
          >
            Search Again
          </Button>
        </div>
      </div>
    );
  };

  return artistData !== "" ? DisplayArtist(artistData) : DisplayArtistMessage();
};
export default Artist;
