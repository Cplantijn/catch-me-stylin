import { Component } from 'react';
import ScenarioDropdown from './ScenarioDropdown';

import '../styles/header';

export default class Header extends Component {
  render() {
    const { requestScenario, fetchScenarios, scenarios, activeScenario } = this.props;
    let instructions = null;

    if (activeScenario && activeScenario.objective) {
      instructions = (<h4>{activeScenario.objective}</h4>);
    }

    return (
      <header className="row expanded align-middle">
        <h3>{'Catch Me Stylin\''}</h3>
        { instructions }
        <ScenarioDropdown
          requestScenario={requestScenario}
          fetchScenarios={fetchScenarios}
          scenarios={scenarios}/>
      </header>
    );
  }
}
