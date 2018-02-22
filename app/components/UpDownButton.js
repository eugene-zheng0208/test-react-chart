const React = require('react');

class UpDownButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const change = (this.props.change > 0) ? +1 : -1;
    this.props.changeFunc(change);
  }

  render() {
    const direction = (this.props.change > 0) ? 'up' : 'down';
    const buttonClass = `fa fa-arrow-circle-${direction} fa-2x icon-button`;
    return <i className={buttonClass} onClick={this.handleClick} />;
  }
}

UpDownButton.propTypes = {
  changeFunc: React.PropTypes.func.isRequired,
  change: React.PropTypes.number.isRequired,
};

module.exports = UpDownButton;
