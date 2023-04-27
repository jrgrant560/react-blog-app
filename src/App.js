import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import { Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar/>
        <div className="content">
          <Routes>
            {/* Home page route */}
            <Route path="/" element={<Home />} />
            {/* Create Blog page route */}
            <Route path="/create" element={<Create />} />
            {/* Single Blog route */}
            <Route path="/blogs/:id" element={<BlogDetails />} />
            {/* All other routes go to 404 page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;