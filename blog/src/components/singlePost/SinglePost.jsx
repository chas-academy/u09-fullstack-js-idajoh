import "./singlePost.css"


export default function SinglePost() {
  return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/5232672/pexels-photo-5232672.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=2" alt="" className="singlePostImg" />

                <h1 className="singlePostTitle"> Lorem ipsum dolor sit.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>

                <div className="singlePostInfo">
                    <span className="singlePostAuthor"> Author: <b> Ida </b> </span>
                    <span className="singlePostDate"> 1 hour ago </span>
                </div>

                <p className="singlePostDesc"> 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero voluptate qui sit asperiores, voluptatem labore est accusantium ullam mollitia earum consequuntur perspiciatis. Dolor, asperiores. Quibusdam ipsum laudantium distinctio ea, dolor animi sapiente veniam sunt reiciendis architecto illo provident quo accusamus perspiciatis, pariatur, obcaecati autem maxime id porro nesciunt! Illum laudantium nemo accusamus natus maiores obcaecati quidem vero commodi debitis omnis eos cum consequatur quo aspernatur tempora at a, magnam saepe dignissimos soluta quis? Asperiores, incidunt consectetur! Aspernatur sed quo sunt voluptatem totam laudantium sapiente suscipit sequi neque adipisci perspiciatis et repudiandae atque laborum soluta error, impedit ab eum autem a! Maxime distinctio laboriosam rerum quos neque atque? Impedit fuga nulla, inventore odit minima maiores doloremque cum libero animi laboriosam autem nihil quasi nesciunt numquam est obcaecati enim assumenda consequatur explicabo doloribus voluptatum perferendis? Delectus incidunt iure minima ut aperiam voluptate optio a dignissimos, nihil quod itaque magnam accusantium unde id quibusdam nemo illo atque aut deserunt quisquam vero? Ipsa, sint fugiat ipsam aspernatur enim rerum, culpa deserunt recusandae accusamus architecto minima fuga. Ex tenetur animi aut at doloremque blanditiis. 
                </p>
            </div>
        </div>
  )
}
