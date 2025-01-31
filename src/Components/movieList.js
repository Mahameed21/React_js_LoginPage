
import '../Styles/home.css'
const MovieList = ({title, year,releasedDate, country,poster,imdbRating, image})=>{

    return (
        <div >
            <div className="movieListCard">
            <img src={image} alt="Fetched from API" className='imageStyle'/>
            <ul>
                <li>Title: {title}</li>
                <li>Year: {year}</li>
                <li>Released date: {releasedDate}</li>
                <li>Country : {country}</li>
                <li>IMDB Rating : {imdbRating}</li>
            </ul>
            </div>

        </div>
    )
}

export default MovieList