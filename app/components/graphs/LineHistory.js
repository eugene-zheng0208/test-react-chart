const _ = require('underscore');
const React = require('react');
const Line = require('react-chartjs-2').Line;
const styles = require('../../styles.js');

const DEFAULT_MAX_SAMPLES = 200;

const graphOptions = {
  animation: { duration: 0 },
  showLines: true,
  scales: {
    xAxes: [{
      display: false,
      gridLines: { color: '#000', display: true },
      labels: { show: false },
    }],
    yAxes: [{
      display: true,
      gridLines: { color: '#000', display: true },
      labels: { show: false },
    }],
  },
};

class LineHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: [props.time.hours],
      minutes: [props.time.minutes],
      seconds: [props.time.seconds],
    };
  }

  componentWillReceiveProps(nextProps) {
    const newState = _.clone(this.state);
    const maxSamples = this.props.maxSamples || DEFAULT_MAX_SAMPLES;

    newState.hours.push(nextProps.time.hours);
    newState.minutes.push(nextProps.time.minutes);
    newState.seconds.push(nextProps.time.seconds);

    if (newState.hours.length > maxSamples) {
      newState.hours = newState.hours.slice(maxSamples * -1);
      newState.minutes = newState.minutes.slice(maxSamples * -1);
      newState.seconds = newState.seconds.slice(maxSamples * -1);
    }

    this.setState(newState);
  }

  getGraphData() {
    return {
      labels: this.state.seconds,
      // labels: [],
      datasets: [
        {
          label: 'Hours',
          fill: false,
          borderColor: styles.colors.time.hours,
          pointRadius: 0,
          data: _.clone(this.state.hours),
        },
        {
          label: 'Minutes',
          fill: false,
          borderColor: styles.colors.time.minutes,
          pointRadius: 0,
          data: _.clone(this.state.minutes),
        },
        {
          label: 'Seconds',
          fill: false,
          borderColor: styles.colors.time.seconds,
          pointRadius: 0,
          data: _.clone(this.state.seconds),
        },
      ],
    };
  }

  render() {
    const graphData = this.getGraphData();
    return (
      <div>
        <Line data={graphData} options={graphOptions} />
      </div>
    );
  }
}

LineHistory.propTypes = {
  time: React.PropTypes.object.isRequired,
  maxSamples: React.PropTypes.number,
};

module.exports = LineHistory;
