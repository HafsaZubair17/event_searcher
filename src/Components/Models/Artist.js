import axios from "axios";

//API call and cache check to get event details of the artist searched
export const getData = (
  userInput,
  setArtistData,
  setInitial,
  setArtistName,
  setEventInitial,
  setLoading,
  artistLocate,
  setSearch
) => {
  setSearch("");
  setInitial(true);
  setEventInitial(false);
  setLoading(true);
  if (localStorage.getItem(userInput.toLowerCase()) !== null) {
    setArtistData(JSON.parse(localStorage.getItem(userInput.toLowerCase())));
    setArtistName(userInput);
    setLoading(false);
    artistLocate();
  } else {
    axios({
      method: "GET",
      url:
        "https://rest.bandsintown.com/artists/" + userInput + "?app_id=123123",
    })
      .then((res) => {
        setLoading(false);
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
        artistLocate();
      })

      .catch((err) => {
        console.log(err, "Error Getting Artist Data");
      });
  }
};
