import * as React from 'react';
import Loader from '../../src/Loader';
import {loaderTestkitFactory} from '../../testkit';
import {loaderTestkitFactory as loaderEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = loaderTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();

  const enzyme = loaderEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function ImageViewerWithMandatoryProps() {
  return <Loader />;
}

function ImageViewerWithAllProps() {
  return (
    <Loader
      color="blue"
      dataHook="hook"
      size="large"
      status="error"
      statusMessage="msg"
      text="text"
    />
  );
}
