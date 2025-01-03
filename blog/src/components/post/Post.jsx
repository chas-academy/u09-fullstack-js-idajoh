import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/5232967/pexels-photo-5232967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Post"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet.
        </span>
        <hr />
        <span className="postDate"> 1 hour ago </span>
      </div>
      <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum reprehenderit sed dolorum voluptatibus provident totam, ipsam autem quaerat expedita, laudantium consectetur nesciunt doloribus! Delectus consectetur est vitae facere velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum reprehenderit sed dolorum voluptatibus provident totam, ipsam autem quaerat expedita, laudantium consectetur nesciunt doloribus! Delectus consectetur est vitae facere velit.
      </p>
    </div>
  );
}
