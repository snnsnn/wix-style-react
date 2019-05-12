import React, { PureComponent } from 'react';
import { SidebarItem } from './SidebarItem/SidebarItem';
import { PersistentHeader } from './SidebarItem/PersistentHeader';
import { PersistentFooter } from './SidebarItem/PersistentFooter';
import css from './main.scss';
import { SidebarContext } from './SidebarAPI';

/** left sidebar  */
class Sidebar extends PureComponent {
  itemKey2Children = {};
  itemKey2ParenttKey = {};

  state = {
    persistentTopChildren: [],
    drivenOutChildren: [],
    onScreenChildren: [],
    drivenInChildren: [],
    persistentBottomChildren: [],

    selectedKey: '',
    lastSelectedKey: '',
  };

  navigateTo = itemKey => {
    if (this.itemKey2ParenttKey[itemKey]) {
      if (this.itemKey2ParenttKey[itemKey] !== this.state.lastSelectedKey) {
        this.setState({
          drivenInChildren: this.itemKey2Children[
            this.itemKey2ParenttKey[itemKey]
          ].children,
          selectedKey: itemKey,
          lastSelectedKey: this.itemKey2ParenttKey[itemKey],
        });
      } else {
        this.setState({ selectedKey: itemKey });
      }
      this.sidebarContext = this.getSidebarContext();
      return;
    }

    if (this.itemKey2Children[itemKey]) {
      const { children, selectedKey } = this.itemKey2Children[itemKey];
      this.setState({
        drivenInChildren: children,
        selectedKey,
        lastSelectedKey: itemKey,
      });
    } else {
      this.setState({ selectedKey: itemKey });
    }

    this.sidebarContext = this.getSidebarContext();
  };

  setSelected = selectedKey => {
    this.setState({ selectedKey });
  };

  getSidebarContext = () => {
    return {
      itemClicked: this.navigateTo,
      backClicked: () => {
        this.setState({
          drivenInChildren: [],
          drivenOutChildren: this.state.drivenInChildren,
          selectedKey: this.state.lastSelectedKey,
          lastSelectedKey: '',
        });
        this.sidebarContext = this.getSidebarContext();
      },
      getSelectedKey: () => this.state.selectedKey,
    };
  };

  sidebarContext = this.getSidebarContext();

  componentWillMount() {
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps(props) {
    const persistentTopChildren = [];
    const persistentBottomChildren = [];
    const onScreenChildren = [];

    const handleChild = child => {
      if (child.type === SidebarItem) {
        this.itemKey2Children[child.props.itemKey] = {
          selectedKey: child.props.innerMenu
            ? child.props.innerMenu.find(
                c => c.type === SidebarItem && !c.props.disable,
              ).props.itemKey
            : child.props.itemKey,
          children: child.props.innerMenu ? child.props.innerMenu : [],
        };

        if (child.props.innerMenu) {
          child.props.innerMenu.forEach(innerChild => {
            if (innerChild.type === SidebarItem) {
              this.itemKey2ParenttKey[innerChild.props.itemKey] =
                child.props.itemKey;
            }
          });
        }
        onScreenChildren.push(child);
      } else if (child.type === PersistentHeader) {
        persistentTopChildren.push(child);
      } else if (child.type === PersistentFooter) {
        persistentBottomChildren.push(child);
      } else {
        onScreenChildren.push(child);
      }
    };

    if (props.children) {
      if (props.children.length) {
        props.children.forEach(child => {
          if (child.length > 0) {
            child.forEach(handleChild);
          } else {
            handleChild(child);
          }
        });
      } else {
        handleChild(props.children);
      }
    }

    const newState = {
      persistentTopChildren,
      persistentBottomChildren,
      onScreenChildren,
      selectedKey: props.selectedKey,
    };

    const selectedItemParentKey = this.itemKey2ParenttKey[props.selectedKey];
    if (selectedItemParentKey) {
      this.setState({
        ...newState,
        drivenInChildren: this.itemKey2Children[selectedItemParentKey].children,
        drivenOutChildren: [],
      });
    } else {
      this.setState({
        ...newState,
        drivenInChildren: [],
        drivenOutChildren: this.state.drivenInChildren,
      });
    }
  }

  render() {
    return (
      <SidebarContext.Provider value={this.sidebarContext}>
        <div className={css.sideBar} data-hook={this.props.dataHook}>
          {this.state.persistentTopChildren}

          <div className={css.content}>
            {this.state.drivenInChildren.length === 0 &&
              this.state.drivenOutChildren.length !== 0 && (
                <div
                  className={`${css.slider} ${css.sliderOutToRight}`}
                  data-hook={'driven-out-children'}
                >
                  {this.state.drivenOutChildren}
                </div>
              )}

            <div
              className={`${css.slider} ${
                this.state.drivenInChildren.length !== 0
                  ? css.sliderOutToLeft
                  : css.sliderInFromLeft
              }`}
              data-hook={'on-screen-children'}
            >
              {this.state.onScreenChildren}
            </div>

            {this.state.drivenInChildren.length !== 0 && (
              <div
                className={`${css.slider} ${css.sliderInFromRight}`}
                data-hook={'driven-in-children'}
              >
                {this.state.drivenInChildren}
              </div>
            )}
          </div>

          {this.state.persistentBottomChildren}
        </div>
      </SidebarContext.Provider>
    );
  }
}

export default Sidebar;
