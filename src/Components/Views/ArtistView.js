import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Search from "../Model&Controller/Search.js";
import "../Styles/Artist.scss";

const Artist=()=>{
    const artistData={
        id: 510,
        name: "Maroon 5",
        url:" http://www.bandsintown.com/Maroon5?came_from=67",
        image_url: "https://s3.amazonaws.com/bit-photos/large/7481529.jpeg",
        facebook_page_url:" https://www.facebook.com/maroon5"
        };

    function DisplayArtist(data){
        return(
            <div className="artist">
                        <Card className="card-artist">
                        <Card.Img variant="top" src={data.image_url} />
                        <Card.Body>
                            <Card.Title className="artist-title">{data.name}</Card.Title>
                            <Card.Text>
                            <a href={data.facebook_page_url} target="_blank">Visit Facebook Page</a>
                            </Card.Text>
                            <Button>Get Event Details</Button>
                        </Card.Body>
                        </Card>
            </div>
        );
    }
    function DisplayMessage(){
        return(
            <div>
                <h1 className="heading">No Artist Found!😕</h1>
            </div>
        );

    }

    if (artistData !== null)
    {
        return
            <DisplayArtist/>;
    }
    else
        {
        return 
            <DisplayMessage/>;
        }
        
        
}
export default Artist;