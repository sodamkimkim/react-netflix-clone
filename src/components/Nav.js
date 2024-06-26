import React, {useEffect, useState} from 'react'
import "./Nav.css";
import { useNavigate } from 'react-router-dom';
export default function Nav() {
    const [show, setShow] = useState(false);
    const [searchValue, SetSearchValue] = useState("");
    const navigate = useNavigate();

    const handleChanged = (e) => {
        SetSearchValue(e.target.value); 
        navigate(`/search?q=${e.target.value}`);
    }
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
                onClick={() => {
                    navigate('/');
                     window.location.reload(); 
                }}/>
            <input className='nav__input' value={searchValue} type='text' onChange={handleChanged} placeholder='영화를 검색해 주세요'/>
            <img
                alt='User logged'
                src={process.env.PUBLIC_URL + '/logo192.png'}
                className='nav__avatar'/>
        </nav>
    )
}