import React, { Component } from 'react';

import { DragLayer } from 'react-dnd';
import itemTypes from './itemTypes';

const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  left: 0,
  top: 0,
};

function getItemStyles(props, clientRect, handleOffset) {
  const { initialOffset, currentOffset } = props;
  if (!initialOffset || !currentOffset) {
    return { display: 'none' };
  }

  const x = currentOffset.x - handleOffset.x;
  const y = currentOffset.y - handleOffset.y;
  const { width, height } = clientRect;
  const transform = `translate(${x}px, ${y}px)`;

  return {
    transform: transform,
    WebkitTransform: transform,
    width,
    height,
  };
}

const defaultConnectDragSource = el => el;

class CustomDragLayer extends Component {
  renderChildren = (items, depth) => {
    const { renderItem, childrenProperty, childrenStyle } = this.props;

    if (!items || !items.length) {
      return null;
    }

    return (
      <div style={childrenStyle}>
        {items.map((item, i) => (
          <div data-hook="dragging-nestable-item" key={i}>
            {renderItem({
              item,
              isPlaceholder: false,
              isPreview: true,
              depth,
              connectDragSource: defaultConnectDragSource,
            })}
            {this.renderChildren(item[childrenProperty], depth + 1)}
          </div>
        ))}
      </div>
    );
  };

  render() {
    const {
      item,
      itemType,
      renderItem,
      isPlaceholder,
      childrenProperty,
      isRenderDraggingChildren,
    } = this.props;

    if (!isPlaceholder || itemType !== itemTypes.nestedItem) {
      return null;
    }

    return (
      <div style={layerStyles}>
        <div
          style={getItemStyles(this.props, item.clientRect, item.handleOffset)}
        >
          {renderItem({
            item: item.data,
            isPlaceholder: false,
            isPreview: true,
            depth: 1,
            connectDragSource: defaultConnectDragSource,
          })}
          {isRenderDraggingChildren &&
            this.renderChildren(item.data[childrenProperty], 2)}
        </div>
      </div>
    );
  }
}

class PureDragLayer extends React.PureComponent {
  render() {
    return <CustomDragLayer {...this.props} />;
  }
}

export default DragLayer(monitor => ({
  item: monitor.getItem(),
  itemType: monitor.getItemType(),
  initialOffset: monitor.getInitialSourceClientOffset(),
  currentOffset: monitor.getSourceClientOffset(),
  isPlaceholder: monitor.isDragging(),
}))(PureDragLayer);
