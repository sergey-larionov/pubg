import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class ListOfPlayers extends Component {

  listOfPlayers = ({list}) => {
    if (list) {
      return list.map((player, key) => {
        return (
          <Link key={key} to={`/player/${player.attributes.name}`}>
            <div className="right">
              <h4>{player.attributes.name}</h4>
                <h6>{player.id}</h6>
            </div>
          </Link>
        )
      })
    }
  }


  render() {
    return (
      <div>
        {this.listOfPlayers(this.props.players)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    players: state.players
  }
}

export default connect(mapStateToProps, null)(ListOfPlayers);