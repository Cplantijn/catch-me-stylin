import { Component } from 'react';
import ScenarioDropdown from './ScenarioDropdown';

import '../styles/header';

export default class Header extends Component {
  render() {
    const { requestScenario, fetchScenarios, scenarios } = this.props;
    return (
      <header className="row expanded align-middle">
        <h3>{'Catch Me Stylin\''}</h3>
        <ScenarioDropdown
          requestScenario={requestScenario}
          fetchScenarios={fetchScenarios}
          scenarios={scenarios}/>
      </header>
    );
  }
}
