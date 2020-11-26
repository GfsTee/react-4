import data from './blogs.json'
import { Link } from "react-router-dom";

const Blog = () => {
    return (
        <div>
            <ul>
                {data.map((ele, i) => {

                    const path = `/blog/${i}`

                    return <li> <Link to={path} key={i} > {ele.title} {i}</Link></li>
                })
                }
            </ul>
        </div >

    );
}

export default Blog;