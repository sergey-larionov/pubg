import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getConfig} from '../actions';
import {bindActionCreators} from "redux";

//components
import Region from '../containers/region';
import Search from '../containers/search';
import ListOfPlayers from '../containers/list_of_players';


class App extends Component {
  componentWillMount(){
    this.props.getConfig();
  }

  render() {
    return (
      <div className="App">
        <Region/>
        <Search/>
        <ListOfPlayers/>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getConfig}, dispatch)
}

export default connect(null, mapDispatchToProps)(App);