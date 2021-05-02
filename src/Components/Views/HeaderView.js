import React, {useState} from 'react';
import "../Styles/Header.scss";
import SearchBar from "material-ui-search-bar";
import { SocialIcon } from 'react-social-icons';

// Header of Web Page

const Header=()=>{
    const [state, setState] = useState('');
    return(
            <div className="row">
                <a href="https://www.bandsintown.com/" target="_blank">
                <img className="logo" src="/logo.png" href="https://www.bandsintown.com/"/>
                </a>

                <SearchBar  className="search" 
                            //value={this.setState.value}
                            //onRequestSearch={(value)=>console.log(value)}
                            placeholder="Search the artist here!"/>

                <SocialIcon className="twitter" 
                            url="https://twitter.com/Bandsintown?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" 
                            target="_blank" bgColor="#00CEC8" fgColor=" #000000" 
                />
            </div>
    );
    }

export default Header;