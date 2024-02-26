import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router';
import TheaterModel from '../../../models/theater-model';
import MovieModel from '../../../models/movie-model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-insert',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.css'
})
export class InsertComponent implements OnInit {

  public movie = new MovieModel();
  public theaer: TheaterModel[];


  public constructor(private dataService: DataService, private router: Router) { } // DI
  public async ngOnInit() {
    try {
      this.theaer = await this.dataService.getAllTheater();
    } catch (err: any) { alert(err.message) }
  }

  public async send() {
    try {
      await this.dataService.addGift(this.movie);
      alert("Movie has been added.")
      this.router.navigateByUrl("/list")

    } catch (err: any) {
      alert(err.message)
    }
  }
}