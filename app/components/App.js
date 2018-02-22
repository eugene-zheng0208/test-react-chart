  /* eslint no-param-reassign: ["error", { "props": false }] */

const _ = require('underscore');
const React = require('react');
const moment = require('moment');

const Header = require('./Header.js');
const CurrentTime = require('./CurrentTime.js');
const UpDown = require('./UpDown.js');

const Doughnut = require('./graphs/Doughnut.js');
const Line = require('./graphs/Line.js');
const Bar = require('./graphs/Bar.js');
const HorizontalBar = require('./graphs/HorizontalBar.js');
const Polar = require('./graphs/Polar.js');
const LineHistory = require('./graphs/LineHistory.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      now: moment(),
      speed: 1,
      step: 1,
      timer: false,
      history1Samples: 60,
      history2Samples: 240,
    };

    // Manually bind events
    this.onChangeSpeed = this.onChangeSpeed.bind(this);
    this.onChangeStep = this.onChangeStep.bind(this);
    this.onChangeHistory1Samples = this.onChangeHistory1Samples.bind(this);
    this.onChangeHistory2Samples = this.onChangeHistory2Samples.bind(this);
  }

  componentWillMount() {
    this.setNewSpeed(1);
  }

  onChangeSpeed(change) {
    this.setNewSpeed((change > 0) ? this.state.speed * 2 : this.state.speed / 2);
  }

  onChangeStep(change) {
    let newStep = (change > 0) ? this.state.step + 5 : this.state.step - 5;

    if (newStep === 0) {
      newStep = (change > 0) ? -1 : 1;
    }

    newStep = (newStep === 6) ? 5 : newStep;
    newStep = (newStep === 4) ? 1 : newStep;
    newStep = (newStep === -4) ? -1 : newStep;
    newStep = (newStep === -6) ? -5 : newStep;

    this.stateChangeWrapper((newState) => {
      newState.step = newStep;
    });
  }

  onChangeHistory1Samples(change) {
    this.stateChangeWrapper((newState) => {
      newState.history1Samples += (change > 0) ? 60 : -60;
      newState.history1Samples = newState.history1Samples ? newState.history1Samples : 60;
    });
  }

  onChangeHistory2Samples(change) {
    this.stateChangeWrapper((newState) => {
      newState.history2Samples += (change > 0) ? 60 : -60;
      newState.history2Samples = newState.history2Samples ? newState.history2Samples : 60;
    });
  }

  setNewSpeed(speed) {
    clearInterval(this.state.timer);

    this.stateChangeWrapper((newState) => {
      newState.speed = speed;
      newState.timer = setInterval(() => {
        this.updateTime();
      }, (1000 / newState.speed));
    });
  }

  addFlexRow(items) {
    return (
      <div className="flexRow">
        {items.map((item, i) => <div className="flexItem" key={i}>{item}</div>)}
      </div>
    );
  }

  stateChangeWrapper(action) {
    const newState = _.clone(this.state);
    action(newState);
    this.setState(newState);
  }

  updateTime() {
    this.stateChangeWrapper((newState) => {
      newState.now.add(this.state.step, 's');
    });
  }

  render() {
    const curTime = {
      hours: this.state.now.hours(),
      minutes: this.state.now.minutes(),
      seconds: this.state.now.seconds(),
    };

    return (
      <div>
        <Header />
        <hr />
        {this.addFlexRow([
          <CurrentTime time={curTime} />,
          <UpDown
            title="Speed"
            value={this.state.speed}
            onChangeValue={this.onChangeSpeed}
          />,
          <UpDown
            title="Step"
            value={this.state.step}
            onChangeValue={this.onChangeStep}
          />,
        ])}
        <hr />
        {this.addFlexRow([
          <Doughnut time={curTime} />,
          <Polar time={curTime} />,
        ])}
        <hr />
        {this.addFlexRow([
          <Line time={curTime} />,
          <Bar time={curTime} />,
          <HorizontalBar time={curTime} />,
        ])}
        <hr />
        {this.addFlexRow([
          <LineHistory time={curTime} maxSamples={this.state.history1Samples} />,
          <LineHistory time={curTime} maxSamples={this.state.history2Samples} />,
        ])}
        {this.addFlexRow([
          <UpDown
            title="Samples"
            value={this.state.history1Samples}
            onChangeValue={this.onChangeHistory1Samples}
          />,
          <UpDown
            title="Samples"
            value={this.state.history2Samples}
            onChangeValue={this.onChangeHistory2Samples}
          />,
        ])}
        <hr />
      </div>
    );
  }
}

module.exports = App;
