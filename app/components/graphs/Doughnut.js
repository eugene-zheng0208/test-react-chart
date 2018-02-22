const React = require('react');
const Doughnut = require('react-chartjs-2').Doughnut;
const styles = require('../../styles.js');

const graphOptions = {
  animation: { animateRotate: false },
  scale: { gridLines: { color: '#000' } },
};

class _Doughnut extends React.Component {
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
        <Doughnut data={this.getGraphData()} options={graphOptions} />
      </div>
    );
  }
}

_Doughnut.propTypes = {
  time: React.PropTypes.object.isRequired,
};

module.exports = _Doughnut;
