import { useNavigate, useParams, Outlet, useLocation } from 'react-router-dom';
import useMovie from 'hooks/useMovie';
import { MovieDetailsBtn } from './App.styled';



function MovieDetails() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { filmData } = useMovie(`movie/${movieId}?`);

  const handleClick = evt => {
    navigate(evt.target.value);
  };

  const handleGoBack = () => {
    navigate(location.state?.from ?? '/');
  };

  const { title, release_date, overview, genres, vote_average, poster_path } =
    filmData;
  return (
    <div>
      <MovieDetailsBtn onClick={handleGoBack}>Go back</MovieDetailsBtn>
      <img src={`https://image.tmdb.org/t/p/w400/${poster_path}`} alt="" />
      <h2>
        {title} {release_date?.slice(0, 4)}
      </h2>
      <p>User score: {vote_average}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      {genres?.map(gen => (
        <span key={gen.id}>{gen.name} </span>
      ))}
      <p>Additional information</p>

      <MovieDetailsBtn value="Cast" onClick={handleClick}>
        Cast
      </MovieDetailsBtn>
      <MovieDetailsBtn value="Reviews" onClick={handleClick}>
        Reviews
      </MovieDetailsBtn>
      <Outlet />
    </div>
  );
};

export default MovieDetails;