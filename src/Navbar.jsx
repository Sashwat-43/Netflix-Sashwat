import React,{ useState,useEffect } from 'react'
import './Navbar.css';


function Navbar() {

    const [scroll,setScroll] = useState(false);

    const scrollNavbar = () =>{
        if(window.scrollY > 100)
        {
            setScroll(true);
        }
        else
        {
            setScroll(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",scrollNavbar);
        return () => {
            window.removeEventListener("scroll",scrollNavbar);
        }
    }, [])

    return (
        <div className={`nav ${scroll && "nav_black"}`}>
            <div className="image_bar">
                <img className="logo" 
                    src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
                    alt="logo"/>
                <img className="avatar" 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="avatar"/>
            </div>
        </div>
    )
}

export default Navbar
