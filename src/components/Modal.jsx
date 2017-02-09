import { Component } from 'react';

import '../styles/modal';

export default class Modal extends Component {
  constructor() {
    super();
    this._handleSignIn = this._handleSignIn.bind(this);
    this._handleInput = this._handleInput.bind(this);
    this.state = {
      displayName: 'Anon'
    };
  }

  _handleInput(e) {
    this.setState({
      displayName: e.target.value
    });
  }

  _handleSignIn(e) {
    e.preventDefault();
    this.props.signIn(this.state.displayName);
  }

  render() {
    const { open } = this.props;
    let modal = null;

    if (open) {
      modal = (
        <div className="modal-background">
          <div className="modal">
            <form
              onSubmit={this._onSubmit}>
              <input
                type="text"
                value={this.state.displayName}
                placeholder="Enter your name"
                onChange={this._handleInput} />
              <input
                type="submit"
                onClick={this._handleSignIn}
                value="Oh yeah!" />
            </form>
          </div>
        </div>
      );
    }
    return modal;
  }
}
