class MovieModel {
    public movieId: number;
    public theaerId: number;
    public movieName: string;
    public startMovie: string;
    public time: string;

    public constructor(movie: MovieModel){
        this.movieId = movie.movieId;
        this.theaerId = movie.theaerId;
        this.movieName = movie.movieName;
        this.startMovie = movie.startMovie;
        this.time = movie.time;
    }
}

export default MovieModel;
