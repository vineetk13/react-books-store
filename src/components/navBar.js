import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faUserCircle} from '@fortawesome/free-solid-svg-icons'

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(true);
    function cons(){
        setIsOpen(!isOpen);
        if(isOpen){
            document.querySelector(".nav-menu").style.width="0px";
        }else{
            document.querySelector(".nav-menu").style.width="210px";
        }
    }
    return (
        <div className="navbar">
            <div>
                <FontAwesomeIcon className="fa-2x menuicon" icon={faBars} onClick={cons}/>
                &emsp;<span className="app-name">Shelv</span>
            </div>
            
            <div className="profile">
                <FontAwesomeIcon className="fa-2x" style={{color:"#E83350"}} icon={faUserCircle}/>&ensp;<span className="profile-name">Vineet K</span>
            </div>
        </div>
    )
}