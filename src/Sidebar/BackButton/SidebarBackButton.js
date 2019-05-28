import React, { Component } from 'react';
import { SidebarContext } from '../SidebarAPI';

export class SidebarBackButton extends Component {
  render() {
    return (
      <SidebarContext.Consumer>
        {context => (
          <div
            data-hook="sidebar-back-button"
            onClick={e => {
              if (!this.props.disable) {
                if (this.props.onClick) {
                  this.props.onClick(e);
                }
                if (!e.defaultPrevented) {
                  context.backClicked();
                }
              }
            }}
          >
            {this.props.children}
          </div>
        )}
      </SidebarContext.Consumer>
    );
  }
}
