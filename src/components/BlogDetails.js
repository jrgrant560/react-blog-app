import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams(); //extract id from params
    const { data: blog, error, isPending } =  useFetch('http://localhost:8000/blogs/' + id); //???
    const history = useHistory(); //history stack of past components or pages visited

    //function that handles delete operation; pushes homepage to history stack, redirecting user
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/'+ blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            {/* conditional if loading page */}
            {isPending && <div>Loading...</div>}
            {/* conditional if error */}
            {error && <div>{error}</div>}
            <article >
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                {/* 'delete blog' button */}
                <button onClick={handleClick}>Delete</button>
            </article>
        </div>
     );
}
 
export default BlogDetails;