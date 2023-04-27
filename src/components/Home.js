import BlogList from './BlogList';
import useFetch from '../hooks/useFetch';

// Home page component
const Home = () => {
    // fetches data from blogs db
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {/* conditional if error */}
            {error && <div>{error}</div>}
            {/* conditional if loading page */}
            {isPending && <div>Loading...</div>}
            {/* BlogList component */}
            <BlogList blogs={blogs} title="All Blogs"/>
        </div>
     );
}

export default Home;