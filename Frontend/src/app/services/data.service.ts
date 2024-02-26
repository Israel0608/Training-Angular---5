import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import MovieModel from '../models/movie-model';
import { appConfig } from '../utils/app-config';
import TheaerModel from '../models/theater-model';
import TheaterModel from '../models/theater-model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public constructor(private http: HttpClient) { }

    public async getAllTheater(): Promise<TheaterModel[]> {
        const observable = this.http.get<TheaterModel[]>(appConfig.TheaterUrl)
        const theater = await firstValueFrom(observable)
        return theater
    }

    public async getMovieByTheater(theaerId: number): Promise<MovieModel[]> {
        const observable = this.http.get<MovieModel[]>(appConfig.MovieByTheaterUrl + theaerId)
        const movie = await firstValueFrom(observable)
        return movie
    }

    public async addGift(movie: MovieModel): Promise<void> {
        const observable = this.http.post<MovieModel>(appConfig.MovieUrl, movie)
        await firstValueFrom(observable)
    }

}
