import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setRegion} from '../actions';
import {bindActionCreators} from 'redux';

class Region extends Component {
  constructor(props) {
    super(props);

    this.state = {
      regions: ["xbox-as", "xbox-eu", "xbox-na", "xbox-oc", "pc-krjp", "pc-jp", "pc-na", "pc-eu", "pc-ru", "pc-oc", "pc-kakao", "pc-sea", "pc-sa", "pc-as"]
    }
  }

  handleChange = (event) => {
    this.props.setRegion(event.target.value)
  }


  render() {
    return (
      <div className="region">
        <form>
          <select name="region" value={this.props.region} onChange={this.handleChange}>
            {this.state.regions.map((region) => {
              return (
                <option key={region} value={region}>{region}</option>
              )
            })
            }
          </select>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    region: state.config.region
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setRegion}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Region);