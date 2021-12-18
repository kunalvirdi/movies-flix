import React, {useEffect, useState} from 'react'
import "./Nav.css"

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY>100){
                handleShow(true);

            }else handleShow(false);
        })
        return () => {
            window.removeEventListener("scroll")
        };
    }, [])
    return (
        <div className={`Nav ${show && "nav_black"}`}>
            <h1 className='Nav-logo'>MOVIESFLIX</h1>
        </div>
    )
}
export default Nav