import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

import TestBackend from '../DragDropContextProvider/TestBackend';
import DragDropContextProvider from '../DragDropContextProvider';

import { nestableListTestkitFactory } from '../../testkit';

import NestableList from './NestableList';

describe('NestableList', () => {
  it('nestable should exists', () => {
    const dataHook = 'nestable-list';
    const items = [{ id: '1', text: 'item 1' }, { id: '2', text: 'item 2' }];
    const onUpdate = jest.fn();
    const renderItem = ({ item }) => <div>{item.text}</div>; // eslint-disable-line react/prop-types

    const wrapper = ReactTestUtils.renderIntoDocument(
      <DragDropContextProvider backend={TestBackend}>
        <NestableList
          dataHook={dataHook}
          items={items}
          renderItem={renderItem}
          onUpdate={onUpdate}
        />
      </DragDropContextProvider>,
    );
    const driver = nestableListTestkitFactory({
      wrapper,
      dataHook,
      element: ReactDOM.findDOMNode(wrapper),
    });
    expect(driver).toBeTruthy();
  });

  it('should call onUpdate on drag and drop', () => {
    const dataHook = 'nestable-list';
    const items = [{ id: '1', text: 'item 1' }, { id: '2', text: 'item 2' }];
    const onUpdate = jest.fn();
    const renderItem = ({ item }) => <div>{item.text}</div>; // eslint-disable-line react/prop-types

    const wrapper = ReactTestUtils.renderIntoDocument(
      <DragDropContextProvider backend={TestBackend}>
        <NestableList
          dataHook={dataHook}
          items={items}
          renderItem={renderItem}
          onUpdate={onUpdate}
          maxDepth={2}
        />
      </DragDropContextProvider>,
    );
    const driver = nestableListTestkitFactory({ wrapper, dataHook });
    driver.reorder({ removedId: '1', addedId: '1' });
    expect(onUpdate).toBeCalledWith(items);
  });

  it('should be able to drag & drap item vertically', () => {
    const dataHook = 'nestable-list';
    const items = [{ id: '1', text: 'item 1' }, { id: '2', text: 'item 2' }];
    const onUpdate = jest.fn();
    const renderItem = ({ item }) => <div>{item.text}</div>; // eslint-disable-line react/prop-types

    const wrapper = ReactTestUtils.renderIntoDocument(
      <DragDropContextProvider backend={TestBackend}>
        <NestableList
          dataHook={dataHook}
          items={items}
          renderItem={renderItem}
          onUpdate={onUpdate}
          maxDepth={2}
        />
      </DragDropContextProvider>,
    );
    const driver = nestableListTestkitFactory({ wrapper, dataHook });
    driver.reorder({ removedId: '2', addedId: '1' });
    expect(onUpdate).toBeCalledWith([items[1], items[0]]);
  });

  it('should be adding nesting if user moved item horizontally above threshold', () => {
    const dataHook = 'nestable-list';
    const items = [{ id: '1', text: 'item 1' }, { id: '2', text: 'item 2' }];
    const onUpdate = jest.fn();
    const threshold = 30;
    const renderItem = ({ item }) => <div>{item.text}</div>; // eslint-disable-line react/prop-types

    const wrapper = ReactTestUtils.renderIntoDocument(
      <DragDropContextProvider backend={TestBackend}>
        <NestableList
          dataHook={dataHook}
          items={items}
          renderItem={renderItem}
          onUpdate={onUpdate}
          maxDepth={2}
          threshold={threshold}
        />
      </DragDropContextProvider>,
    );
    const driver = nestableListTestkitFactory({ wrapper, dataHook });
    const offset = { x: threshold + 1, y: 0 };
    driver.reorder({ removedId: '2', addedId: '2' }, offset);

    expect(onUpdate).toBeCalledWith([{ ...items[0], children: [items[1]] }]);
  });

  it('should not do nesting if dropped item not horizontally enough', () => {
    const dataHook = 'nestable-list';
    const items = [{ id: '1', text: 'item 1' }, { id: '2', text: 'item 2' }];
    const onUpdate = jest.fn();
    const threshold = 30;
    const renderItem = ({ item }) => <div>{item.text}</div>; // eslint-disable-line react/prop-types

    const wrapper = ReactTestUtils.renderIntoDocument(
      <DragDropContextProvider backend={TestBackend}>
        <NestableList
          dataHook={dataHook}
          items={items}
          renderItem={renderItem}
          onUpdate={onUpdate}
          maxDepth={2}
          threshold={threshold}
        />
      </DragDropContextProvider>,
    );
    const driver = nestableListTestkitFactory({ wrapper, dataHook });
    const offset = { x: threshold - 1, y: 0 };
    driver.reorder({ removedId: '2', addedId: '2' }, offset);

    expect(onUpdate).toBeCalledWith(items);
  });

  it('should remove nesting if dropping the item on unnested area', () => {
    const dataHook = 'nestable-list';
    const items = [
      { id: '1', text: 'item 1' },
      { id: '2', text: 'item 2', children: [{ id: '33', text: 'item 33' }] },
    ];
    const onUpdate = jest.fn();
    const threshold = 30;
    const renderItem = ({ item }) => <div>{item.text}</div>; // eslint-disable-line react/prop-types

    const wrapper = ReactTestUtils.renderIntoDocument(
      <DragDropContextProvider backend={TestBackend}>
        <NestableList
          dataHook={dataHook}
          items={items}
          renderItem={renderItem}
          onUpdate={onUpdate}
          maxDepth={2}
          threshold={threshold}
        />
      </DragDropContextProvider>,
    );
    const driver = nestableListTestkitFactory({ wrapper, dataHook });
    driver.reorder({ removedId: '33', addedId: '1' });

    expect(onUpdate).toBeCalledWith([
      { id: '33', text: 'item 33' },
      { id: '1', text: 'item 1' },
      { id: '2', text: 'item 2', children: [] },
    ]);
  });
});
