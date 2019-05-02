import * as React from 'react';
import Table from '../../src/Table';
import {tableTestkitFactory} from '../../testkit';
import {tableTestkitFactory as tableEnzymeTestkitFactory} from '../../testkit/enzyme';
import { mount } from 'enzyme';

async function testkits() {
  const vanilla = tableTestkitFactory({
    dataHook: 'hoo',
    wrapper: document.createElement('div'),
  });

  console.log(vanilla.getHeaderCell(0).getBoundingClientRect());

  const enzyme = tableEnzymeTestkitFactory({
    dataHook: 'hoo',
    wrapper: mount(<div/>)
  });

  console.log(await enzyme.getRowCheckboxDriver(4).getLabel());
}

function TableWithMandatoryProps() {
  return <Table
    columns={[
      {
        title: <h1>hi</h1>,
        render: (rowData, rowNum) => (
          <pre>{JSON.stringify(rowData, undefined, 2)}</pre>
        ),
      }
    ]}
  />;
}

function TableWithAllProps() {
  return <Table
    columns={[
      {
        title: <h1>hi</h1>,
        render: (rowData, rowNum) => (
          <pre>{JSON.stringify(rowData, undefined, 2)}</pre>
        ),
      }
    ]}
    dataHook="hiiiiii"
    width="133"
    allowMultiDetailsExpansion
    data={[{}, {}, {}]}
    dynamicRowClass={rowData => rowData.toString()}
    hasMore
    hideHeader
    id="hey oh"
    infiniteScroll
    itemsPerPage={42}
    loader={<span>Loading...</span>}
    loadMore={() => console.log('loading...')}
    onMouseEnterRow={() => console.log('entered!')}
    onMouseLeaveRow={() => console.log('left!')}
    onRowClick={() => console.log('clicked!')}
    onSelectionChanged={(selectedIds, change) => console.log(selectedIds.join(' '), change)}
    rowClass="rowzz"
    rowDataHook="hoooooooo"
    rowDetails={(rowData, rowNum) => <span />}
    rowVerticalPadding="medium"
    scrollElement={document.createElement('span')}
    selectedIds={[]}
    selectionDisabled
    showHeaderWhenEmpty
    showSelection
    useWindow
    withWrapper
  >
    <Table.ToolbarContainer />
    <Table.Titlebar />
    <Table.Content titleBarVisible />
    <Table.EmptyState
      dataHook="1000000"
      title={<h3>Hi</h3>}
      image={<img src="https://goog.com/img.png" alt="hi" />}
      subtitle="Hey"
      theme="page-no-border"
    />
  </Table>;
}
