import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// component for Creating new blog posts
const Create = () => {
    // form fields
    const [title, setTitle] = useState(''); //blank default
    const [body, setBody] = useState(''); //blank default
    const [author, setAuthor] = useState('Shubham');  //'Robert' default
    const [isPending, setIsPending] = useState(false); //whether we are waiting to add the blog or not
    const navigate = useNavigate();

    //form submit handler
    const handleSubmit = (e) => {
        e.preventDefault(); //prevents refresh
        const blog = { title, body, author };

        setIsPending(true); //turn on pending

        //POST blog object to db
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false); //turn off pending
            navigate('/'); //redirect user to homepage
        })
    }

    // form that handles new blog creation
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                {/* title text input */}
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                {/* body text input */}
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog author:</label>
                {/* author select input: 3 options */}
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Shubham">Shubham</option>
                    <option value="Satyam">Satyam</option>
                    <option value="Anmol">Anmol</option>
                    <option value="Smooth Criminal">Smooth Criminal</option>
                </select>
                {/* if not loading, allow add blog */}
                {!isPending && <button>Add Blog</button>}
                {/* if not loading, disable button and display text */}
                {isPending && <button disabled>Adding Blog</button>}
            </form>
        </div>
     );
}
 
export default Create;