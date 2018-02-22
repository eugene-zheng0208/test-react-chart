const React = require('react');
const Line = require('react-chartjs-2').Line;

const graphOptions = {
  animation: { duration: 0 },
  showLines: true,
  scales: {
    xAxes: [{
      display: true,
      gridLines: { color: '#000', display: true },
      labels: { show: true },
    }],
    yAxes: [{
      display: true,
      gridLines: { color: '#000', display: true },
      labels: { show: true },
    }],
  },
};

class _Line extends React.Component {
  getGraphData() {
    return {
      labels: ['Hours', 'Minutes', 'Seconds'],
      datasets: [
        {
          label: 'Time',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [
            this.props.time.hours,
            this.props.time.minutes,
            this.props.time.seconds,
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Line data={this.getGraphData()} options={graphOptions} />
      </div>
    );
  }
}

_Line.propTypes = {
  time: React.PropTypes.object.isRequired,
};

module.exports = _Line;
