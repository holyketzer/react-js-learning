import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class PieChart extends React.Component {
  componentDidMount() {
    if (__CLIENT__) { // eslint-disable-line no-undef
      const c3 = require('c3');

      this.chart = c3.generate({
        bindto: ReactDOM.findDOMNode(this.refs.chart),
        data: {
          columns: this.props.columns,
          type : 'pie',
        },
      });
    }
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  componentWillReceiveProps(nextProps) {
    this.chart.load(nextProps);
  }

  render() {
    return (
      <div ref='chart' />
    );
  }
}

PieChart.propTypes = {
  columns: PropTypes.array,
};

export default PieChart;
