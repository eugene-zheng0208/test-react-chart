const React = require('react');
const Polar = require('react-chartjs-2').Polar;
const styles = require('../../styles.js');

const graphOptions = {
  animation: { duration: 0 },
  scale: {
    gridLines: { color: '#000' },
    ticks: {
      backdropColor: 'rgba(0,0,0,0.5)',
    },
  },
};

class _Polar extends React.Component {
  getGraphData() {
    return {
      labels: [
        'Hours',
        'Minutes',
        'Seconds',
      ],
      datasets: [{
        data: [
          this.props.time.hours,
          this.props.time.minutes,
          this.props.time.seconds,
        ],
        borderColor: '#000',
        backgroundColor: [
          styles.colors.time.hours,
          styles.colors.time.minutes,
          styles.colors.time.seconds,
        ],
      }],
    };
  }

  render() {
    return (
      <div>
        <Polar data={this.getGraphData()} options={graphOptions} />
      </div>
    );
  }
}

_Polar.propTypes = {
  time: React.PropTypes.object.isRequired,
};

module.exports = _Polar;
