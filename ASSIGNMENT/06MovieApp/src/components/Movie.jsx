
function Movie({ movie }) {
  return (
    <div className="container">
      <div className="row">
        <div style={{ width: "20%" }} className="p-3">
          <div className="card">
            <img
              src={ movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image" }
              className="card-img-top"
              alt={movie.Title}
            />
            <div className="card-footer" style={{backgroundColor: '#FF4C4C'}}>
              <p className="card-text text-white text-center">{movie.Title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
