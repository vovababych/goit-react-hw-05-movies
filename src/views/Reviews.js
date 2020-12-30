import { useState, useEffect } from 'react';
import * as FetchMovies from '../services/fetchMovies';

export default function Reviews({ match }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    FetchMovies.FetchReviews(match.params.movieId).then(setReviews);
  }, [match.params.movieId]);

  console.log('reviews', reviews);

  return (
    <>
      <h2>Reviews</h2>
      <ul>
        {reviews &&
          reviews.map(review => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.length > 0 ? review.content : 'No review'}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
