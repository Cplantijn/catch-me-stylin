import { Component } from 'react';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import * as scenarioActions from '../actions/scenario';
import * as editorActions from '../actions/editor';
import * as userActions from '../actions/user';
import Header from '../components/Header';
import GameContainer from '../components/GameContainer';
import Modal from '../components/Modal';
import StatusConsole from '../components/StatusConsole';
import '../styles/base.scss';
import '../styles/main.scss';

class App extends Component {
  constructor() {
    super();
    this.socket = io();
  }

  componentDidMount() {
    this.socket.on('welcome', guid => {
      this.props.setUserGuid(guid);
      this.props.openModal();
    });

    this.socket.on('newUser', users => {
      this.props.populateUsers(users);
    });

    this.socket.on('newScenario', scenario => {
      this.props.startScenario(scenario);
    });

    this.socket.on('markupUpdate', users => {
      this.props.updateUsers(users);
    });
  }

  render() {
    return (
      <div className="app-wrapper">
        <Header
          requestScenario={this.props.requestScenario}
          fetchScenarios={this.props.fetchScenarios}
          scenarios={this.props.scenarios}
          />
        <GameContainer
          user={this.props.user}
          updateCSS={this.props.updateCSS}
          activeScenario={this.props.scenarios.activeScenario}
          allUsers={this.props.allUsers}/>
        <StatusConsole
          user={this.props.user}
          selectUser={this.props.selectUser}
          allUsers={this.props.allUsers}/>
        <Modal
          open={this.props.user.modalOpen}
          user={this.props.user}
          signIn={this.props.signIn}
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  scenarios: state.scenarios,
  user: state.user,
  allUsers: state.allUsers
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...scenarioActions,
    ...editorActions,
    ...userActions
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
