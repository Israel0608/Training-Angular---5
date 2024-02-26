class AppConfig {
    public readonly MovieUrl = "http://localhost:4000/api/movie/";
    public readonly TheaterUrl = "http://localhost:4000/api/theater/";
    public readonly MovieByTheaterUrl = "http://localhost:4000/api/movie-by-theater/";
}

export const appConfig = new AppConfig();
