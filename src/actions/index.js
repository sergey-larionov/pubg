import axios from 'axios';

const URL_ROOT = 'https://api.playbattlegrounds.com';
const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5YTg0ZDFjMC00MTgwLTAxMzYtMzJhYi0wMmZjZDY5OWU2NDkiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTI3MTY2OTM0LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InplcmlrIn0.5cJLJlI0eCyX5XmNOOI3QbwKJn8FWynd9Pn2brcvbpM';

export function getPlayers(keyword) {
  return (dispatch, getState) => {
    const region = getState().config.region
    const url = `${URL_ROOT}/shards/${region}/players?filter[playerNames]=${keyword}`;
    axios.get(url, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Accept': 'application/vnd.api+json'
      }
    }).then(response => {
      dispatch({
        type: 'GET_PLAYERS_SUCCESS',
        payload: response.data
      })
    }).catch(error => {
      dispatch({
        type: 'GET_PLAYERS_ERROR',
        payload: error
      })
    })
  }
}

export function getPlayer(id) {
  return (dispatch, getState) => {
    console.log(id)
    const region = getState().config.region
    const url = `${URL_ROOT}/shards/${region}/players/${id}`;
    axios.get(url, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Accept': 'application/vnd.api+json'
      }
    }).then(response => {
      dispatch({
        type: 'GET_PLAYER_SUCCESS',
        payload: response.data
      })
    }).catch(error => {
      dispatch({
        type: 'GET_PLAYER_ERROR',
        payload: error
      })
    })
  }
}


export function getSeasons() {
  return (dispatch, getState) => {
    const region = getState().config.region
    const url = `${URL_ROOT}/shards/${region}/seasons`;
    axios.get(url, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Accept': 'application/vnd.api+json'
      }
    }).then(response => {
      dispatch({
        type: 'GET_SEASONS_SUCCESS',
        payload: response.data
      })
    }).catch(error => {
      dispatch({
        type: 'GET_SEASONS_ERROR',
        payload: error
      })
    })
  }
}

export function setRegion(region) {
  return{
    type: 'SET_REGION',
    payload: region
  }
}

export function playerDetail(id) {

  const request = fetch(`${URL_ROOT}/carsIndex?id=${id}`, {method: 'GET'})
    .then(response => response.json())

  return {
    type: 'CAR_DETAIL',
    payload: request
  }
}

export function getConfig() {
  return {
    type: 'GET_CONFIG',
    payload: true
  }
}