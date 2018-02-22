const React = require('react');
const Bar = require('react-chartjs-2').Bar;

const graphOptions = {
  animation: { duration: 0 },
  showLines: true,
  scales: {
    xAxes: [{ gridLines: { color: '#000' } }],
    yAxes: [{ gridLines: { color: '#000' } }],
  },
};

class _Bar extends React.Component {
  getGraphData() {
    return {
      labels: ['Hours', 'Minutes', 'Seconds'],
      datasets: [
        {
          label: 'Time',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
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
        <Bar data={this.getGraphData()} options={graphOptions} />
      </div>
    );
  }
}

_Bar.propTypes = {
  time: React.PropTypes.object.isRequired,
};

module.exports = _Bar;
