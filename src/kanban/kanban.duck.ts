import Immutable from 'seamless-immutable';
import {createDuck, createReducer, createDispatchedActions} from 'redux-typed-ducks';
import {KanbanState, Board, Column} from '../types';
import {boardDucks} from './board.ducks';
import {columnDucks} from './column.ducks';
import {cardDucks} from './card.ducks';

export default class KanbanActions {
    board = boardDucks;
    column = columnDucks;
    card = cardDucks;
}

const kanbanActions = new KanbanActions();
const initialKanban = Immutable({
    boards: [],
    activeBoard: -1
});
export const kanbanReducer = createReducer(kanbanActions, initialKanban);
export const kanbanDispatchedActionsFactory = store => createDispatchedActions(kanbanActions, store);
