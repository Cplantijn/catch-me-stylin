import {
  SCENARIOS_LOADING,
  START_SCENARIO,
  SCENARIOS_LOADED,
  UPDATE_CSS
} from '../constants';

export default function scenarios(state = {
  options: null,
  activeScenario: null,
  scenariosLoading: false
}, action) {
  switch (action.type) {
  case START_SCENARIO:
    return { ...state, activeScenario: action.scenario };
  case SCENARIOS_LOADING:
    return { ...state, scenariosLoading: true };
  case SCENARIOS_LOADED:
    return { ...state, options: action.options };
  case UPDATE_CSS:
    return { ...state, activeScenario: { ...state.activeScenario, cssContent: action.markup } };
  default:
    return state;
  }
}
