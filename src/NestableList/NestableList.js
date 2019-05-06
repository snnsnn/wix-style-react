
import React, { PropTypes } from 'react';
import WixComponent from '../BaseComponents/WixComponent';
import { removeFromTree, addToTree } from './utils';
import { polyfill } from 'react-lifecycles-compat';

import CustomDragLayer from './DragLayer';
import Container from './Container';
import { NestableListContext } from './NestableListContext';

import withDNDContext from './withDNDContext';

function replaceNegativeIndex(items, nextPosition, childrenProperty) {
  let currItems = items;

  return nextPosition.map(nextIndex => {
    if (nextIndex !== -1) {
      currItems = currItems[nextIndex][childrenProperty] || [];
      return nextIndex;
    }

    return currItems.length;
  });
}

// fixing a bug where the new path is increased in nesting
// and the first position jumps too far by 2, and that's why it decreased by 1
// need to check if the jump can become more severe
function getRealNextPosition(prev, next) {
  // moving up a level
  if (prev.length < next.length) {
    return next.map((nextIndex, i) => {
      if (typeof prev[i] !== 'number') {
        return nextIndex;
      }
      return nextIndex > prev[i] ? nextIndex - 1 : nextIndex;
    });
  }

  return next;
}

class NestableList extends WixComponent {
  static defaultProps = {
    items: [],
    isRenderDraggingChildren: false,
    childrenProperty: 'children',
    childrenStyle: {},
    onUpdate: () => {},
    useDragHandle: false,
    maxDepth: Infinity,
    threshold: 30,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.items !== state.items) {
      return {
        ...state,
        items: props.items,
      };
    }
  }

  state = {
    items: this.props.items,
  };

  moveItem = ({ dragItem, prevPosition, nextPosition }) => {
    const { childrenProperty } = this.props;
    let newItems = this.state.items.slice();

    // the remove action might affect the next position,
    // so update next coordinates accordingly
    let realNextPosition = getRealNextPosition(prevPosition, nextPosition);

    if (realNextPosition[realNextPosition.length - 1] === -1) {
      realNextPosition = replaceNegativeIndex(
        newItems,
        realNextPosition,
        childrenProperty,
      );
    }

    newItems = removeFromTree(newItems, prevPosition, childrenProperty);
    newItems = addToTree(
      newItems,
      dragItem,
      realNextPosition,
      childrenProperty,
    );

    this.setState({ items: newItems });

    return realNextPosition;
  };

  dropItem = () => {
    this.props.onUpdate(this.state.items);
  };

  render() {
    const { items } = this.state;
    const {
      renderItem,
      childrenProperty,
      childrenStyle,
      isRenderDraggingChildren,
      useDragHandle,
      maxDepth,
      threshold,
    } = this.props;

    return (
      <div>
        <NestableListContext.Provider
          value={{
            useDragHandle,
            maxDepth,
            threshold,
            renderItem,
            moveItem: this.moveItem,
            dropItem: this.dropItem,
          }}
        >
          <div>
            <Container
              items={items}
              parentPosition={[]}
              childrenProperty={childrenProperty}
              childrenStyle={childrenStyle}
              isRenderDraggingChildren={isRenderDraggingChildren}
              topLevel
            />
            <CustomDragLayer
              isRenderDraggingChildren={isRenderDraggingChildren}
              renderItem={renderItem}
              childrenProperty={childrenProperty}
              childrenStyle={childrenStyle}
            />
          </div>
        </NestableListContext.Provider>
      </div>
    );
  }
}

polyfill(NestableList);

export default withDNDContext(NestableList);
