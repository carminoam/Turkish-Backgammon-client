import { GamePositionModel } from "../models/game-position.model";

export class GamePositionState {
    public gamePosition: GamePositionModel;
}

export enum GamePositionActionType {
    FetchGamePosition = "FetchGamePosition",
    UpdateGamePosition = "UpdateGamePosition",
    ResetGamePosition = "ResetGamePosition"
}

export interface GamePositionAction {
    type: GamePositionActionType;
    payload: any;
}

export function fetchGamePosition(gamePosition: GamePositionModel): GamePositionAction {
    return { type: GamePositionActionType.FetchGamePosition, payload: gamePosition };
}
export function updateGamePosition(gamePosition: GamePositionModel): GamePositionAction {
    return { type: GamePositionActionType.UpdateGamePosition, payload: gamePosition };
}
export function resetGamePosition(): GamePositionAction {
    return { type: GamePositionActionType.ResetGamePosition, payload: null };
}

export function gamePositionReducer(currentState = new GamePositionState(), action: GamePositionAction): GamePositionState {

    const newState = { ...currentState };

    switch (action.type) {
        case GamePositionActionType.FetchGamePosition:
            newState.gamePosition = action.payload;
            break;
        case GamePositionActionType.UpdateGamePosition:
            newState.gamePosition = action.payload;
            break;
        case GamePositionActionType.ResetGamePosition:
            newState.gamePosition = {
                blackPosition: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 3, 0, 0, 5, 0, 0, 0, 0, 0],
                whitePosition: [0, 0, 0, 0, 0, 5, 0, 3, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            };
            break;
    }
    return newState;
}




