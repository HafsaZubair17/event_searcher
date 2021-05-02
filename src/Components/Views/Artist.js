import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "../Styles/Artist.scss";


const Artist=()=>{
    return(
        <div className="artist">
        <Card className="card-artist">
        <Card.Img variant="top" src="/Artist.jpg" />
        <Card.Body>
            <Card.Title className="artist-title">Adele</Card.Title>
            <Card.Text>
            <a href="facebook.com/adele" target="_blank">Visit the Facebook Page</a>
            </Card.Text>
            <Button>Get Event Details</Button>
        </Card.Body>
        </Card>
        </div>
    );
}
export default Artist;