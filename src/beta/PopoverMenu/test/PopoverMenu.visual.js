/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import PopoverMenu from '../PopoverMenu';
import IconButton from '../../../IconButton';
import TextButton from '../../../TextButton';
import More from '../../../new-icons/More';
import { PopoverMenuTestkit } from '../../../../testkit/beta';

const interactiveDataHook = 'interactive-popover-menu';

const menuItems = [
  <PopoverMenu.MenuItem text="option 1" onClick={e => console.log(e)} />,
  <PopoverMenu.MenuItem text="option 2" onClick={e => console.log(e)} />,
  <PopoverMenu.MenuItem text="option 3" onClick={e => console.log(e)} />,
];

const createDriver = dataHook =>
  PopoverMenuTestkit({
    wrapper: document.body,
    dataHook,
  });

class InteractiveEyeTest extends React.Component {
  async componentDidMount() {
    this.props.componentDidMount();
  }

  render() {
    const { componentDidMount, ...restProps } = this.props;

    return (
      <div style={{ marginLeft: '300px', marginTop: '100px' }}>
        <PopoverMenu
          dataHook={interactiveDataHook}
          triggerElement={
            <IconButton priority="secondary">
              <More />
            </IconButton>
          }
        >
          <PopoverMenu.MenuItem text="option 1" onClick={e => console.log(e)} />
          <PopoverMenu.MenuItem text="option 2" onClick={e => console.log(e)} />
          <PopoverMenu.MenuItem text="option 3" onClick={e => console.log(e)} />
        </PopoverMenu>
      </div>
    );
  }
}

const tests = [
  {
    describe: 'should render', // prop name (e.g. size)
    its: [
      {
        it: 'with icon button',
        props: {
          triggerElement: (
            <IconButton priority="secondary">
              <More />
            </IconButton>
          ),
          children: menuItems,
        },
      },
      {
        it: 'with text button',
        props: {
          triggerElement: <TextButton priority="secondary">Actions</TextButton>,
          children: menuItems,
        },
      },
    ],
  },
];

const interactiveTests = [
  {
    describe: 'show menu',
    its: [
      {
        it: 'basic',
        componentDidMount: async () => {
          const driver = createDriver(interactiveDataHook);
          await driver.openMenu();
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`PopoverMenu/${describe}`, module).add(it, () => (
      <div style={{ marginLeft: '300px', marginTop: '100px' }}>
        <PopoverMenu {...props} />
      </div>
    ));
  });
});

interactiveTests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    storiesOf(`PopoverMenu/${describe}`, module).add(it, () => (
      <InteractiveEyeTest {...props} componentDidMount={componentDidMount} />
    ));
  });
});
