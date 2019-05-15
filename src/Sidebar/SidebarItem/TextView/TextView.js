import React from 'react';
import css from './TextView.scss';
import { SidebarItemContext } from '../../SidebarAPI';

export const TextView = props => {
  return (
    <SidebarItemContext.Consumer>
      {context => (
        <div
          className={`${css.text} ${
            context && context.selected() ? css.active : ''
          } ${props.disable ? css.disable : ''}`}
        >
          {props.children}
        </div>
      )}
    </SidebarItemContext.Consumer>
  );
};
