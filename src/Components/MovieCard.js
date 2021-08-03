import StarRatingComponent from 'react-star-rating-component';
const MovieCard = ({movie}) => {
    return (
    <div className='card'>
        <div className='poster'>
        <img style={{ width: 300, height: 350, marginTop: 20, marginLeft:150}} src={movie.posterURL} alt="movie"/>
        </div>
        <div className='movieContent'>
            <h1 style={{ color: 'red', fontSize: 35}}>{movie.title}</h1>
            
            <p style={{ margin: 100, marginTop: 20, marginBottom: 20 }}>{movie.description}</p>
            <StarRatingComponent
                starCount={7}
                value={movie.rate}
            />

    </div>
    </div>
    )
}

export default MovieCard;