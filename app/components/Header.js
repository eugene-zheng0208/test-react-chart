const React = require('react');

const divStyle = {
  textAlign: 'center',
};

const logoStyle = {
  height: '32px',
};

const chartJS2URL = 'https://github.com/gor181/react-chartjs-2';
const chart2JSLogoURL = 'http://www.chartjs.org/img/chartjs-logo.svg';

const Header = function () {
  return (
    <div style={divStyle}>
      <h1>
        <img alt="Chart.js logo" style={logoStyle} src={chart2JSLogoURL} />
        &nbsp;
        react-chartjs-2
        <span style={{ fontSize: '0.4em', verticalAlign: 'text-top' }}>
          <a href={chartJS2URL} target="blank">
            <i className="fa fa-external-link icon-button" />
          </a>
        </span>
        &nbsp;
        examples
      </h1>
    </div>
  );
};

module.exports = Header;
