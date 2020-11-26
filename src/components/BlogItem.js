import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import data from './blogs.json'


const BlogItem = () => {
    let { id } = useParams();
    console.log(id);
    return (
        <div>
            <h1>{data[id].title}</h1>
            <p>{data[id].text}</p>
            <Link to="/blog">Go back</Link>
        </div>
    );
}

export default BlogItem;