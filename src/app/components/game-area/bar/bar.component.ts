import { Component, OnInit, Input } from '@angular/core';
import { GamePositionModel } from 'src/app/models/game-position.model';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  @Input()
  public pos: number;
  @Input()
  public gamePos: GamePositionModel;

  constructor(
  
  ) { }

  public whitePieces: number[];
  public blackPieces: number[];

  ngOnInit(){
    // console.log(this.gamePos);
    this.whitePieces = Array(this.gamePos.whitePosition[this.pos -1]);
    console.log(this.whitePieces)
    this.blackPieces = Array(this.gamePos.blackPosition[this.pos -1]);
  }


}
