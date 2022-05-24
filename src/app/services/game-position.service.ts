import { Injectable } from '@angular/core';
import { GamePositionModel } from '../models/game-position.model';
import { resetGamePosition, updateGamePosition } from '../redux/game-position-state';
import store from '../redux/store';

@Injectable({
  providedIn: 'root'
})
export class GamePositionService {

  constructor() { }


  public async fetchGamePosition(): Promise<GamePositionModel> {
    if (store.getState().gamePositionState.gamePosition === undefined) {
      await store.dispatch(resetGamePosition());
    }
    let gamePosition = store.getState().gamePositionState.gamePosition;
    return gamePosition;
  }

  public async updateGamePosition(gamePosition: GamePositionModel): Promise<GamePositionModel> {
    await store.dispatch(updateGamePosition(gamePosition));
    return gamePosition;
  }



}
