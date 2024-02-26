import express, { NextFunction, Request, Response } from "express";
import GiftModel from "../3-models/theater-model";
import StatusCode from "../3-models/status-codes";
import dataService from "../5-services/data-service";
import MovieModel from "../3-models/movie-model";

const router = express.Router();

router.get("/theater", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const theater = await dataService.getAllTheater();
        response.json(theater);
    }
    catch (err: any) {
        next(err);
    }
});

router.get("/movie-by-theater/:theaerId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const theaerId = +request.params.theaerId;
        const movie = await dataService.getMovieByTheater(theaerId);
        response.json(movie);
    }
    catch (err: any) {
        next(err);
    }
});

router.post("/movie", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const movie = new MovieModel(request.body);
        const addedMovie = await dataService.addMovie(movie);
        response.status(StatusCode.Created).json(addedMovie);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;
