import { Component } from 'react';

export default class ScenarioDropdown extends Component {
  constructor() {
    super();
    this._selectHandler = this._selectHandler.bind(this);
    this._renderDropdown = this._renderDropdown.bind(this);
  }

  componentWillMount() {
    this.props.fetchScenarios();
  }

  _selectHandler(e) {
    this.props.requestScenario(e.target.value);
  }

  _renderDropdown() {
    const { scenarios } = this.props;

    let renderedOptions = null;
    if (scenarios.options && scenarios.options.length) {
      renderedOptions = scenarios.options.map(option => {
        return (<option key={option.key} value={option.key}>{option.label}</option>);
      });
    }

    return (
      <select
        onChange={this._selectHandler}
        defaultValue="0">
        <option value="0" disabled>Choose a scenario</option>
        { renderedOptions }
      </select>
    );
  }

  render() {
    return (
      <div className="scenario-dropdown">
        <span>Choose a Scenario</span>
        {this._renderDropdown()}
      </div>
    );
  }
}
