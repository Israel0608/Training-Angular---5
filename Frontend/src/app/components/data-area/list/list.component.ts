import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import MovieModel from '../../../models/movie-model';
import TheaerModel from '../../../models/theater-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  public theaer: TheaerModel[];
  public movie: MovieModel[];

  public constructor(private dataService: DataService) { } // DI

  public async ngOnInit() {
    try {
      this.theaer = await this.dataService.getAllTheater();
    } catch (err: any) { alert(err.message) }
  }

  public async showMovie(args: Event) {
    try {
      const select = args.target as HTMLSelectElement; // Elemnt raising the event;
      const theaerId = +select.value
      this.movie = await this.dataService.getMovieByTheater(theaerId)

    } catch (err: any) { alert(err.message) }
  }
}
