import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle"> ABOUT </span>
          <img src="https://images.pexels.com/photos/29977323/pexels-photo-29977323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="#" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est cumque odit fuga vitae, pariatur sapiente eum incidunt veritatis. 
          </p>
        </div>

        <div className="sidebarItem">
          <span className="sidebarTitle"> CATEGORIES </span>
          <ul className="sidebarList">
            <li className="sidebarListItem"> Life </li>
            <li className="sidebarListItem"> Music </li>
            <li className="sidebarListItem"> Style </li>
            <li className="sidebarListItem"> Sport </li>
            <li className="sidebarListItem"> Tech </li>
            <li className="sidebarListItem"> Cinema </li>
          </ul>
        </div>

        <div className="sidebarItem">
          <span className="sidebarTitle"> FOLLOW US </span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-instagram"></i>
            <i className="sidebarIcon fa-brands fa-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-twitter"></i>
            <i className="sidebarIcon fa-brands fa-tiktok"></i>
          </div>
        </div>
    </div>
  )
}
