import {combineReducers} from 'redux';
import config from './config_reducer'
import players from './players_reducer'
import player from './player_reducer'
import seasons from './seasons_reducer'

const rootReducer = combineReducers({
  config,
  players,
  player,
  seasons
});

export default rootReducer;

