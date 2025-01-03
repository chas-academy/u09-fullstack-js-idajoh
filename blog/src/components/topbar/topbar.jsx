import "./topbar.css"


export default function topbar() {
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
            <li className="topListItem"> HOME </li>
            <li className="topListItem"> ABOUT </li>
            <li className="topListItem"> CONTACT </li>
            <li className="topListItem"> WRITE </li>
            <li className="topListItem"> LOGOUT </li>
          </ul>
        </div>

        <div className="topRight">
          <img 
          className="topImg"
          src="https://images.pexels.com/photos/29971034/pexels-photo-29971034/free-photo-of-iretioluwa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile" /> 
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>       
        </div>
      </div>
    </div>
  )
}


