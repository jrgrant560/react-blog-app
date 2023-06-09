import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

// BlogDetails component that displays a single blog post based on the id in url
const BlogDetails = () => {
    const { id } = useParams(); //extract id from params
    const { data: blog, error, isPending } =  useFetch('http://localhost:8000/blogs/' + id); //???
    const navigate = useNavigate(); //navigation hook

    //function that handles delete operation; navigates to homepage, redirecting user
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/'+ blog.id, {
            method: 'DELETE'
        }).then(() => {
           navigate('/');
        })
    }

    return ( 
        <div className="blog-details">
            {/* conditional if loading page */}
            {isPending && <div>Loading...</div>}
            {/* conditional if error */}
            {error && <div>{error}</div>}
            {/* article that displays all blog information */}
            <article >
                {/* title */}
                <h2>{blog.title}</h2>
                {/* author */}
                <p>Written by {blog.author}</p>
                {/* body */}
                <div>{blog.body}</div>
                {/* 'delete blog' button */}
                <button onClick={handleClick}>Delete</button>
            </article>
        </div>
     );
}
 
export default BlogDetails;