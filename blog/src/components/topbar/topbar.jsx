import { Link } from "react-router-dom";
import "./topbar.css"


export default function topbar() {
  const user = false;
  return (
    <div>
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fa-brands fa-instagram"></i>
          <i className="topIcon fa-brands fa-pinterest"></i>
          <i className="topIcon fa-brands fa-twitter"></i>
          <i className="topIcon fa-brands fa-tiktok"></i>
        </div>

        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem"> <Link className="link" to="/"> HOME </Link> </li>
            <li className="topListItem"> <Link className="link" to="/"> ABOUT </Link> </li>
            <li className="topListItem"> <Link className="link" to="/"> CONTACT </Link> </li>
            <li className="topListItem"> <Link className="link" to="/"> WRITE </Link> </li>
            <li className="topListItem"> {user && "LOGOUT"} </li>
          </ul>
        </div>

        <div className="topRight">
          {
            user ? (
              <img 
              className="topImg"
              src="https://images.pexels.com/photos/29971034/pexels-photo-29971034/free-photo-of-iretioluwa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile" /> 
            ) : ( 
              <ul className="topList">
                <li className="topListItem"> 
                  <Link className="link" to="/login"> LOGIN </Link> 
                </li>

                <li className="topListItem"> 
                  <Link className="link" to="/register"> REGISTER </Link> 
                </li>
              </ul>
            )
          }

          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>       
        </div>
      </div>
    </div>
  )
}


