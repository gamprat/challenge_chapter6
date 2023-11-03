import { reduxMovieDetail } from '../../services/movie/get-data-movie-detail'
import { setDataMovie } from '../reducers/movie/movieDataSlice';

export const DetailMovie = (id) => (dispatch) => {
    return reduxMovieDetail(id).then((result) => {
    return dispatch(setDataMovie(result.data.data));
  }).catch((err) => {
    
  });
}
