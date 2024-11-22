import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Movie from './components/Movie';
import 'bootstrap/dist/css/bootstrap.css';





function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const fetchMovies = async (query = '') => {
    setError(null);
    try {
      const response = await axios.get('https://www.omdbapi.com/', {
        params: {
          apikey: '76a28ce3',
          s: query || 'Batman',
        },
      });

      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
        setError(response.data.Error); 
      }
    } catch (err) {
      setError('Terjadi kesalahan saat mengakses data.');
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
    <header>
      <Header title="Movie Search App"  onSearch={fetchMovies}/>
    </header>
      <div className="container">
        {error && <p className="text-danger">{error}</p>}
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.imdbID}>
              <Movie movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
