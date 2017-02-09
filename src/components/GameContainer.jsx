import { Component } from 'react';
import CodeEditor from './CodeEditor';
import Preview from './Preview';

export default class GameContainer extends Component {
  render() {
    return (
      <div className="row expanded game-container">
        <CodeEditor
          user={this.props.user}
          allUsers={this.props.allUsers}
          updateCSS={this.props.updateCSS}
          activeScenario={this.props.activeScenario}/>
        <Preview
          user={this.props.user}
          allUsers={this.props.allUsers}
          activeScenario={this.props.activeScenario}/>
      </div>
    );
  }
}
