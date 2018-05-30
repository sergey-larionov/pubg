import React, {Component} from 'react';
import {connect} from 'react-redux';

class Season extends Component {
  handleChange = (event) => {

  }

  renderSeasons = ({list}) => {
    if (list) {
      const currentSeason = list.find((el)=>{
        return el.attributes.isCurrentSeason
      })
      const currentSeasonId = currentSeason && currentSeason.id
      return (
        <form>
          <select name="season" value={currentSeasonId} onChange={this.handleChange}>
            {
              list.map((season, key) => {
                return (
                  <option key={key} value={season.id}>{season.id}</option>
                )
              })
            }
          </select>
        </form>
      )
    }
  }


  render() {
    return (
      <div className="season">
        {this.renderSeasons(this.props.seasons)}
      </div>
    )
  }
}


export default connect()(Season);