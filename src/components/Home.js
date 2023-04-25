import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {/* conditional if error */}
            {error && <div>{error}</div>}
            {/* conditional if loading page */}
            {isPending && <div>Loading...</div>}
            <BlogList blogs={blogs} title="All Blogs"/>
        </div>
     );
}

export default Home;