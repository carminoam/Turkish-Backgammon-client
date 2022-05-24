import { Directive, HostListener } from '@angular/core';
import { GamePositionService } from '../services/game-position.service';

@Directive({
  selector: '[drag-over]'
})
export class DragOverDirective {

  constructor(
    private gamePositionService : GamePositionService
  ) { }

  @HostListener('dragstart', ['$event'])
  public onDragStart(event: any): void {
    console.log("drag start : " + event.currentTarget.id);
  }

  @HostListener('dragenter', ['$event'])
  public onDragEnter(event: any): void {
    console.log("drag enter : " + event.currentTarget.id);

  }

  // @HostListener('dragend')
  // public onDragEnd(): void {
  //   console.log("from : " + this.idFrom, "to : " + this.idTo);
  // }

}



