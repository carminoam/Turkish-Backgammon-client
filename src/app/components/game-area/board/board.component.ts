import { GamePositionService } from './../../../services/game-position.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { GamePositionModel } from 'src/app/models/game-position.model';
import store from 'src/app/redux/store';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(
    public gamePositionService: GamePositionService
  ) { }

  public gamePosition: GamePositionModel;


  async ngOnInit(): Promise<void> {
    try {
      this.gamePosition = await this.gamePositionService.fetchGamePosition();
      console.log(this.gamePosition);
    } catch (error) {
      console.log(error);
    }
  }

}
