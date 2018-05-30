import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPlayers, getPlayer, getSeasons} from '../actions';
import {bindActionCreators} from 'redux';

import Season from './season';

class Player extends Component {
  componentDidMount() {
    // this.props.getSeasons()
    this.props.getPlayers(this.props.match.params.id)

  }
  componentDidUpdate(){
    if (this.props.playerId) {
      this.props.getPlayer(this.props.playerId)
    }
  }


  render() {
    return (
      <div>
        <Season seasons={this.props.seasons}/>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    players: state.players,
    playerId: state.players.list[0] && state.players.list[0].id,
    seasons: state.seasons
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getPlayers, getPlayer, getSeasons}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);