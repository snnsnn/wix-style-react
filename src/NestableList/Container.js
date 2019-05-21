import React, { Component } from 'react';

import Item from './Item';
import { getDepth } from './utils';

class Container extends Component {
  render() {
    const {
      items,
      parentPosition,
      childrenProperty,
      childrenStyle,
      isRenderDraggingChildren,
      topLevel,
      topContainerClass,
      containerClass,
      itemClass,
    } = this.props;

    const className = (topLevel && topContainerClass) || containerClass;

    return (
      <div className={className} style={topLevel ? {} : childrenStyle}>
        {items.map((item, i) => {
          const position = parentPosition.concat([i]);
          const children = item[childrenProperty];

          return (
            <Item
              id={item.id}
              key={item.id}
              item={item}
              index={i}
              siblings={items}
              isRenderDraggingChildren={isRenderDraggingChildren}
              position={position}
              depth={getDepth(item, childrenProperty)}
              itemClass={itemClass}
            >
              {children && children.length ? (
                <WrappedContainer
                  items={children}
                  isRenderDraggingChildren={isRenderDraggingChildren}
                  parentPosition={position}
                  childrenProperty={childrenProperty}
                  childrenStyle={childrenStyle}
                  itemClass={itemClass}
                  containerClass={containerClass}
                />
              ) : null}
            </Item>
          );
        })}
      </div>
    );
  }
}

class WrappedContainer extends React.PureComponent {
  render() {
    return <Container {...this.props} />;
  }
}

export default WrappedContainer;
