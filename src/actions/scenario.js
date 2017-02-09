import $ from 'jquery';

import {
  REQUEST_NEW_SCENARIO,
  START_SCENARIO,
  SCENARIOS_LOADING,
  SCENARIOS_LOADED
} from '../constants';

export function startScenario(scenario) {
  return {
    type: START_SCENARIO,
    scenario
  };
}

export function requestScenario(name) {
  return dispatch => {
    dispatch({ type: REQUEST_NEW_SCENARIO })
    return $.get(`/scenario/${name}`)
      .then(result => {
        // nothing
      })
      .catch(err => {
        console.error(err);
      });
  };
}

export function fetchScenarios() {
  return dispatch => {
    dispatch({ type: SCENARIOS_LOADING });
    return $.get('/scenarios')
      .then(result => {
        dispatch({ type: SCENARIOS_LOADED, options: result.body })
      })
      .catch(err => {
        console.error(err);
      });
  };
}
