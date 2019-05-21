import React from 'react';
import Text from 'wix-style-react/Text';

export default () => (
  <div data-hook="text-with-ellipses" style={{ width: '120px' }}>
    <Text className="custom-class-shouldnt-break" ellipsis>
      very very long text
    </Text>
  </div>
);
