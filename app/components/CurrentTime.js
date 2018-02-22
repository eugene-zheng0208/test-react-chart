const React = require('react');

const divStyle = {
  textAlign: 'center',
};

const h2Style = {
  display: 'inline',
};

const iconStyle = {
  color: '#777',
};

const CurrentTime = function (props) {
  const iconClass = 'fa fa-clock-o fa-2x';

  let h = `00${props.time.hours}`;
  let m = `00${props.time.minutes}`;
  let s = `00${props.time.seconds}`;
  h = h.substr(h.length - 2);
  m = m.substr(m.length - 2);
  s = s.substr(s.length - 2);

  return (
    <div style={divStyle}>
      <i className={iconClass} style={iconStyle} />
      &nbsp;
      <h2 style={h2Style}>
        Time: {h}:{m}:{s}
      </h2>
    </div>
  );
};

CurrentTime.propTypes = {
  time: React.PropTypes.object.isRequired,
};

module.exports = CurrentTime;
