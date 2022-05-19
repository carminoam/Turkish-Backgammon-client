import { Injectable } from '@angular/core';
import { GamePositionModel } from '../models/game-position.model';
import { resetGamePosition, updateGamePosition } from '../redux/game-position-state';
import store from '../redux/store';

@Injectable({
  providedIn: 'root'
})
export class GamePositionService {

  constructor() { }

  // public async whiteMakeMove(from: number, to: number): Promise<void> {
  //   let gamePosition = store.getState().gamePositionState.gamePosition;
  // }

  public async fetchGamePosition(): Promise<GamePositionModel> {
    if (store.getState().gamePositionState.gamePosition === undefined) {
      await store.dispatch(resetGamePosition());
    }
    let gamePosition = store.getState().gamePositionState.gamePosition;
    return gamePosition;
  }

}
