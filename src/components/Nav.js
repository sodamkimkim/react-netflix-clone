import React, {useEffect, useState} from 'react'
import "./Nav.css";

const Nav = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {  
            if (window.scrollY > 50) {
                setShow(true);
            } else {
              setShow(false);
            }
        });
        return() => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);
    return (
        <nav className={`nav ${show && "nav__black"}`}>
            <img
                alt='Netflix logo'
                src='//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png'
                className='nav_logo'
                onClick={() => {window.location.reload(); console.log("window.location.reload()");}}/>
            <img
                alt='User logged'
                src={process.env.PUBLIC_URL + '/logo192.png'}
                className='nav__avatar'/>
        </nav>
    )
} 

export default Nav
