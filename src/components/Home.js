import { useLocation } from 'react-router-dom';
import useMovie from 'hooks/useMovie';
import { MovieLink, HomeWrapper,H1 } from './App.styled';

function Home() {
  const { filmData } = useMovie('trending/all/day?');
  const location = useLocation();
  const films = filmData.results;
  return (
    <HomeWrapper>
      <H1>Trending today</H1>
      <ul>
        {films?.map(film => (
          <li key={film.id}>
            <MovieLink to={`movies/${film.id}`} state={{ from: location }}>
              {film.title}
            </MovieLink>
          </li>
        ))}
      </ul>
    </HomeWrapper>
  );
};
export default Home;