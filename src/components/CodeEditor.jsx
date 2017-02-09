import { Component } from 'react';
import CodeMirror from 'react-codemirror';
import c from 'classnames';

import 'codemirror/mode/css/css';
import 'codemirror/mode/xml/xml';
import '../styles/code_editor';
import '../styles/code_switcher';

export default class CodeEditor extends Component {
  constructor() {
    super();
    this._updateCSS = this._updateCSS.bind(this);
    this.state = {
      mode: 'css',
      opts: {
        mode: 'css',
        theme: 'zenburn'
      }
    };
  }

  _updateCSS(e) {
    this.props.updateCSS(e);
  }

  _swapMode(mode) {
    let opts;
    if (mode === 'css') {
      opts = {
        mode: 'css',
        theme: 'zenburn'
      };
    } else {
      opts = {
        mode: 'xml',
        theme: 'material'
      };
    }
    this.setState({
      mode,
      opts
    });
  }
  render() {
    const { activeScenario, user, allUsers } = this.props;

    const htmlCls = c({
      active: this.state.mode === 'xml'
    });
    const cssCls = c({
      active: this.state.mode === 'css'
    });
    const editorCls = c({
      zenburn: this.state.mode === 'css',
      material: this.state.mode === 'xml'
    }, 'code-editor-container columns small-3');

    let editorValue;
    let readOnlyOverride = { readOnly: false };

    if (this.state.mode === 'css') {
      if (allUsers.selectedUser === user.guid) {
        editorValue = activeScenario && activeScenario.cssContent ? activeScenario.cssContent : '';
      } else if (allUsers.selectedUser) {
        if (activeScenario && allUsers.users[allUsers.selectedUser].markupCss) {
          readOnlyOverride = { readOnly: true };
          editorValue = allUsers.users[allUsers.selectedUser].markupCss;
        } else if (activeScenario && activeScenario.cssContent) {
          editorValue = activeScenario.cssContent;
        } else {
          editorValue = '';
        }
      }
    } else {
      editorValue = activeScenario && activeScenario.htmlContent ? activeScenario.htmlContent : '';
    }

    return (
      <div className={editorCls}>
        <div className="code-switcher">
          <span
            onClick={this._swapMode.bind(this, 'xml')}
            className={htmlCls}>
            html
          </span>
          <span
            onClick={this._swapMode.bind(this, 'css')}
            className={cssCls}>
            css
          </span>
        </div>
        <CodeMirror
          value={editorValue}
          options={{ ...this.state.opts, ...readOnlyOverride }}
          onChange={this._updateCSS} />
      </div>
    );
  }
}
