import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPlayers} from "../actions";
import {bindActionCreators} from 'redux';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword:  ''
    }
  }

  searchPlayers = (event) => {
    event.preventDefault();
    this.props.getPlayers(this.state.keyword)
  }

  handleChange = (event) => {
    this.setState({
      keyword: event.target.value
    })
  }

  render() {
    return (
      <div className="main_search">
        <form onSubmit={this.searchPlayers}>
          <input type="text" value={this.state.keyword} onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({getPlayers}, dispatch)
}

export default connect(null, mapDispatchToProps)(Search);