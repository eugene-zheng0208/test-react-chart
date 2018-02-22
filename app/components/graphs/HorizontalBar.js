const React = require('react');
const HorizontalBar = require('react-chartjs-2').HorizontalBar;

const graphOptions = {
  animation: { duration: 0 },
  showLines: true,
  scales: {
    xAxes: [{ gridLines: { color: '#000' } }],
    yAxes: [{ gridLines: { color: '#000' } }],
  },
};

class _HorizontalBar extends React.Component {
  getGraphData() {
    return {
      labels: ['Hours', 'Minutes', 'Seconds'],
      datasets: [
        {
          label: 'Time',
          backgroundColor: 'rgba(99,200,102,0.2)',
          borderColor: 'rgba(99,200,102,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(99,200,102,0.4)',
          hoverBorderColor: 'rgba(99,200,102,1)',
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
        <HorizontalBar data={this.getGraphData()} options={graphOptions} />
      </div>
    );
  }
}

_HorizontalBar.propTypes = {
  time: React.PropTypes.object.isRequired,
};

module.exports = _HorizontalBar;
