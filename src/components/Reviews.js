import { useParams } from 'react-router-dom';
import useMovie from 'hooks/useMovie';

export default function Reviews() {
  const { movieId } = useParams();
  const { filmData, isLoading, error } = useMovie(`movie/${movieId}/reviews?`); 

  if (isLoading) return <div>Loading...</div>; 
  if (error) return <div>Error fetching reviews</div>;

  return (
    <div>
      {filmData.total_results < 1 && <p>No reviews</p>}
      <ul>
        {filmData.results?.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
