import { useLocation } from 'react-router-dom';
import useMovie from 'hooks/useMovie';
import { MovieLink } from './App.styled';

function Home() {
  const { filmData } = useMovie('trending/all/day?');
  const location = useLocation();
  const films = filmData.results;
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {films?.map(film => (
          <li key={film.id}>
            <MovieLink to={`movies/${film.id}`} state={{ from: location }}>
              {film.title}
            </MovieLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;