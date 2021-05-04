import axios from "axios";

//API call and cache check to get event details for a given artist
export const getEventData = (
  Artist,
  eventLocate,
  artistName,
  setEventInitial,
  setEventData,
  setEventLoading
) => {
  setEventInitial(true);
  setEventLoading(true);
  let artistEvent = artistName + " Events";
  if (localStorage.getItem(artistEvent.toLowerCase()) !== null) {
    setEventData(JSON.parse(localStorage.getItem(artistEvent.toLowerCase())));
    eventLocate();
    setEventLoading(false);
  } else {
    axios({
      method: "GET",
      url:
        "https://rest.bandsintown.com/artists/" +
        Artist +
        "/events?app_id=123123&date=upcoming",
    })
      .then((res) => {
        setEventLoading(false);
        if (res.data.length > 0) {
          setEventData(res.data);
          localStorage.setItem(
            artistEvent.toLowerCase(),
            JSON.stringify(res.data)
          );
        } else {
          setEventData("");
        }
        eventLocate();
      })
      .catch((err) => {
        console.log(err, "Error Getting Events");
      });
  }
};
