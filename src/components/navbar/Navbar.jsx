import "./Navbar.scss"
import logo from "../../helper/logo.png"

const Navbar =()=>{
    return(
        <div className="navbar">
            <div className="logo">
            <img src={logo} alt=""/>
            </div>

            <div className="links">
                <a href="#horoscope">Horoscope</a>
                <a href="#horoscope">Daily</a>
                <a href="#horoscope">Tarot</a>
                <a href="#horoscope">Article</a>
                <a href="#horoscope">Contact</a>
            </div>




            
        </div>

    )
}
export default Navbar;