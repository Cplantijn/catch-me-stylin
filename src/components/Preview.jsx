import { Component } from 'react';
import '../styles/preview';

export default class Preview extends Component {
  render() {
    const { activeScenario, user, allUsers } = this.props;

    let preview = (
      <div className="preview-container empty">
        <span>There is no active scenario. Go ahead and choose one!</span>
      </div>
    );

    let previewCssContent;

    if (activeScenario) {
      if (allUsers.selectedUser !== user.guid) {
        if (activeScenario && allUsers.users[allUsers.selectedUser].markupCss) {
          previewCssContent = allUsers.users[allUsers.selectedUser].markupCss;
        } else if (activeScenario && activeScenario.cssContent) {
          previewCssContent = activeScenario.cssContent;
        } else {
          previewCssContent = '';
        }
      } else if (activeScenario && activeScenario.cssContent) {
        previewCssContent = activeScenario.cssContent;
      } else {
        previewCssContent = '';
      }
    }

    if (activeScenario) {
      preview = (
        <div className="columns">
          <style dangerouslySetInnerHTML={{ __html: previewCssContent }}></style>
          <div className="preview-container" dangerouslySetInnerHTML={{ __html: activeScenario.htmlContent }} />
        </div>
      );
    }

    return preview;
  }
}
