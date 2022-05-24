import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GamePositionModel } from 'src/app/models/game-position.model';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnChanges{

  @Input() pos: number;
  @Input() gamePos: GamePositionModel;

  constructor(
  
  ) { }

  public whitePieces: number[];
  public blackPieces: number[];

  ngOnChanges(){
    // console.log(this.gamePos);
    this.whitePieces = Array(this.gamePos?.whitePosition[this.pos - 1]).fill(8);
    this.blackPieces = Array(this.gamePos?.blackPosition[this.pos - 1]).fill(8);
  }


}
