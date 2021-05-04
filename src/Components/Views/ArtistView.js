import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "../../Styles/Artist.scss";

//Display Artist from API call result
const Artist = ({
  locate,
  artistData,
  artistName,
  setInitial,
  setEventInitial,
  setEventData,
  setEventLoading,
}) => {
  //API call and cache check to get event details for a given artist
  const getEventData = (Artist) => {
    setEventInitial(true);
    setEventLoading(true);
    let artistEvent = artistName + " Events";
    axios({
      method: "GET",
      url:
        "https://rest.bandsintown.com/artists/" +
        Artist +
        "/events?app_id=123123&date=upcoming",
    })
      .then((res) => {
        setEventLoading(false);
        if (localStorage.getItem(artistEvent.toLowerCase()) !== null) {
          setEventData(
            JSON.parse(localStorage.getItem(artistEvent.toLowerCase()))
          );
        } else {
          if (res.data.length > 0) {
            setEventData(res.data);
            localStorage.setItem(
              artistEvent.toLowerCase(),
              JSON.stringify(res.data)
            );
          } else {
            setEventData("");
          }
        }
        locate();
      })
      .catch((err) => {
        console.log(err, "Error Getting Events");
      });
  };

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
              <Button onClick={() => getEventData(artistName)}>
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
