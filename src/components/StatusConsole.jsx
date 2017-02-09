import { Component } from 'react';
import _ from 'lodash';
import c from 'classnames';

require('../styles/status_console');

export default class StatusConsole extends Component {
  _selectUser(guid) {
    this.props.selectUser(guid);
  }
  render() {
    const { allUsers } = this.props;

    const users = _.map(allUsers.users, (user, guid) => {
      if (user.displayName) {
        const cls = c({
          active: guid === allUsers.selectedUser,
          self: guid === this.props.user.guid
        });
        return (
          <li
            key={guid}
            className={cls}
            onClick={this._selectUser.bind(this, guid)}>
            {user.displayName}
          </li>
        );
      }
      return null;
    });

    return (
      <footer className="status-console">
        <ul>
          { users }
        </ul>
      </footer>
    );
  }
}
