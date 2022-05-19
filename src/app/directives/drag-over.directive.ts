import { Directive, HostListener, Input, NgModule } from '@angular/core';
import { GamePositionService } from '../services/game-position.service';

@Directive({
  selector: '[drag-over]'
})
export class DragOverDirective {

  constructor(
    private gamePositionService : GamePositionService
  ) { }

  public currentBarId: number;

  @HostListener("dragover", ['$event'])
  public onDragOver(event: any): void {
    event.preventDefault();
    console.log(event.currentTarget.id)
    this.currentBarId = event.currentTarget.id;
    return event.currentTarget.id;
  }

  @HostListener('dragstart', ['$event'])
  public onDragStart(event: any) {

  }

  // @HostListener('dragend', ['$event'])
  // public async onDragEnd(event: any) {
  //   await this.gamePositionService.whiteMakeMove(24,22);
  // }
}








