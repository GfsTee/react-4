import { useParams } from "react-router-dom";

const BlogItem = () => {
    let { id } = useParams();
    console.log(id);
    return (
        <h1>Ich bin Blogeintrag {id}</h1>
    );
}

export default BlogItem;