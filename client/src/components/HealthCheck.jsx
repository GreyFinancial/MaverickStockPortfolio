import React from 'react';
import Axios from 'axios';
// import HealthCheckItem from './HealthCheckItem.jsx';
import StockChart from './StockChart.jsx';


class HealthCheck extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="columns">
        <div className="column">
          <div className="box has-text-centered" style={{marginTop: '80px'}}>
            {}
          </div>
        </div>
        <div className="column is-8"> 
          {this.props.apiWait ? (<div className="apiWait">
            <i className="fas fa-pause"></i> 
            Please wait.. API only can we called few times..</div>) : ''}
          {this.props.currentStock.metaData === undefined ? null : (
            <StockChart currentStock={this.props.currentStock} />
          )}
        </div>
      </div>
    );
  }
}

export default HealthCheck;
