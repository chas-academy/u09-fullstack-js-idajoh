import "./header.css"

export default function header() {
  return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm"> React & Node </span>
                <span className="headerTitleLg"> Blog </span>
            </div>
            <img className="headerImg" src="https://images.pexels.com/photos/29148102/pexels-photo-29148102/free-photo-of-monokrom-angelskulptur-i-lissabon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="headerImg" />
        </div>
    )
}
