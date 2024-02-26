import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import MovieModel from "../3-models/movie-model";
import TheaterModel from "../3-models/theater-model";

class DataService {

    public async getAllTheater(): Promise<TheaterModel[]> {
        const sql = "SELECT * FROM theater";
        const theater = dal.execute(sql);
        return theater;
    }

    public async getMovieByTheater(theaerId: number): Promise<MovieModel[]> {

        const sql = "SELECT * FROM movie WHERE theaerId = ?";

        const theaer = await dal.execute(sql, [theaerId]);

        return theaer;
    }

    public async addMovie(movie: MovieModel): Promise<MovieModel> {

        const sql = "INSERT INTO movie VALUES(DEFAULT, ?, ?, ?, ?)";

        const info: OkPacket = await dal.execute(sql, [movie.theaerId, movie.movieName, movie.startMovie, movie.time]);

        movie.movieId = info.insertId;

        return movie;
    }
}

const dataService = new DataService();

export default dataService;
