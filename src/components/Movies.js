import { useRef } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import {
  MovieLink,
  MoviesInput,
  MoviesForm,
  MoviesSearchBtn,
} from './App.styled';
import useMovie from 'hooks/useMovie';

function Movies() {
  const inputRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const { filmData } = useMovie(
    `search/movie?query=${query}&include_adult=false&`
  );

  const films = filmData.results;

  const handleSubmit = evt => {
    const form = evt.currentTarget;
    evt.preventDefault();
    navigate(`?query=${inputRef.current.value}`);
    form.reset();
  };

  return (
    <div>
      <MoviesForm onSubmit={handleSubmit}>
        <MoviesInput
          type="text"
          placeholder="Search movies"
          ref={inputRef}
        ></MoviesInput>
        <MoviesSearchBtn type="submit">Search</MoviesSearchBtn>
      </MoviesForm>
      {films?.map(
        film =>
          query && (
            <p key={film.id}>
              <MovieLink to={`${film.id}`} state={{ from: location }}>
                {film.title}
              </MovieLink>
            </p>
          )
      )}
    </div>
  );
}
export default Movies;
