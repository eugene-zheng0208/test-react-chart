const React = require('react');
const UpDownButton = require('./UpDownButton');

const divStyle = {
  textAlign: 'center',
};

const h2Style = {
  display: 'inline',
};

const UpDown = function (props) {
  return (
    <div style={divStyle}>
      <h2 style={h2Style}>{props.title}:</h2>
      &nbsp;
      <UpDownButton changeFunc={props.onChangeValue} change={-1} />
      &nbsp;
      <UpDownButton changeFunc={props.onChangeValue} change={+1} />
      <h2 style={h2Style}> {props.value}</h2>
    </div>
  );
};

UpDown.propTypes = {
  title: React.PropTypes.string.isRequired,
  value: React.PropTypes.number.isRequired,
  onChangeValue: React.PropTypes.func.isRequired,
};

module.exports = UpDown;
